import repos from "../../../infra/database";
import { encryptor } from "../../../utils/encryptor";
import { validSchema } from "../../../validators";
import { UserDTO } from "../../dtos/UserDTO";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";
import { sendVerificationMail } from "./services/verification-mail";

export class CreateUserController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { username, email, password } = req.body;
    const validationUser = await validSchema("user:create", {
      username,
      email,
      password
    });

    if (validationUser.error) {
      return res.status(400).json({
        error: validationUser.error
      });
    }

    const existsUser = await repos.user.findByEmailOrUsername({ username, email });
    if (existsUser) {
      const invalidField = existsUser.email === email ? "email" : "username";
      return res.status(409).json({
        error: "Already exists user by " + invalidField
      });
    }

    const encryptedPass = await encryptor.hash(password);
    const user = await repos.user.create({
      username,
      email,
      password: encryptedPass
    });

    sendVerificationMail(user);
    return res.status(201).json({
      data: UserDTO.from(user)
    });
  }
}