import repos from "../../../infra/database";
import { encryptor } from "../../../utils/encryptor";
import { validSchema } from "../../../validators";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";
import { checkTokenAuthRecoveryMail } from "./services/auth-recovery-mail";

export class ChangePasswordUserController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { token, password } = req.body;

    const isValidToken = checkTokenAuthRecoveryMail(token);
    if (!isValidToken) {
      return res.status(401).json({
        error: "Invalid token"
      });
    }

    const { id, email } = isValidToken.data;
    const validationUser = await validSchema("user:auth", { email, password });
    if (validationUser.error) {
      return res.status(400).json({
        error: validationUser.error
      });
    }

    const existsUser = await repos.user.findById({ id });
    if (!existsUser || existsUser.email !== email) {
      return res.status(401).json({
        error: "Invalid token"
      });
    }

    const encryptedPass = await encryptor.hash(password);
    await repos.user.update({
      id, password: encryptedPass,
    });

    return res.status(200).end();
    
  }
}