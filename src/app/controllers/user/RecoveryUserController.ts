import repos from "../../../infra/database";
import { validSchema } from "../../../validators";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";
import { sendAuthRecoveryMail } from "./services/auth-recovery-mail";

export class RecoveryUserController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { email } = req.body;

    const validationUser = await validSchema("user:recovery", { email });
    if (validationUser.error) {
      return res.status(400).json({
        error: validationUser.error
      });
    }

    const existsUser = await repos.user.findByEmail({ email });
    if(!existsUser) {
      return res.status(404).json({
        error: "Not found user by email"
      });
    }

    sendAuthRecoveryMail(existsUser);
    return res.status(200).json({
      data: {
        message: "Check your email"
      }
    });
  }
}