import { Controller, HttpRequest, HttpResponse, HttpDataResponse } from "../../protocols/controller";

export class CreateUserController implements Controller {
  
  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { username, email, password } = req.body;

    return res.json({
      data: {
        username,
        email,
        password
      }
    });
  }
}