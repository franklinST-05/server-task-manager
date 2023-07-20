import repos from "../../../infra/database";
import { encryptor } from "../../../utils/encryptor";
import { validSchema } from "../../../validators";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";
import { randomAuthToken } from "./services/auth-user-token";
import { sendVerificationMail } from "./services/auth-verification-mail";

export class AuthUserController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { email, password } = req.body;

    const validationUser = await validSchema("user:auth", { email, password });
    if (validationUser.error) {
      return res.status(400).json({
        error: validationUser.error,
      });
    }

    const existsUser = await repos.user.findByEmail({ email });
    if (!existsUser) {
      return res.status(404).json({
        error: "Not found user by email"
      });
    }

    if (!existsUser.verified) {
      const actualDate = new Date();
      const betweenDate =  actualDate.getTime() - existsUser.createdAt.getTime();

      if (betweenDate > 300000) sendVerificationMail(existsUser);
      return res.status(401).json({
        error: "Valid your account, check your email"
      });
    }

    const comparePass = await encryptor.compare(password, existsUser.password);
    if (!comparePass) {
      return res.status(401).json({
        error: "Invalid password"
      });
    }

    const token = randomAuthToken(existsUser);
    return res.json({
      data: { token }
    });
  }
}