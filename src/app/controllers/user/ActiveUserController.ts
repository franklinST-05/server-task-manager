import repos from "../../../infra/database";
import { UserDTO } from "../../dtos/UserDTO";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";
import { checkVerificationMailToken } from "./services/verification-mail";

export class ActiveUserController implements Controller {

  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { token } = req.params;
    
    const isValidToken = checkVerificationMailToken(token);
    if(!isValidToken) {
      return res.status(401).json({
        error: "Invalid token"
      });
    }

    const { id } = isValidToken.data;
    const updateUser = await repos.user.update({
      id,
      verified: true
    });

    return res.json({
      data: UserDTO.from(updateUser)
    });
  }
}