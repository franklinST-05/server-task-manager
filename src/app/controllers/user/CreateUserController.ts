import { validSchema } from "../../../validators";
import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";

export class CreateUserController implements Controller {
  
  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { username, email, password } = req.body;

    const validationUser = await validSchema("user:create", {
      username,
      email,
      password
    });

    if(validationUser.error)  {
      return res.status(400).json({
        error: validationUser.error
      });
    }

    return res.json({
      data: {
        username,
        email,
        password
      }
    });
  }
}