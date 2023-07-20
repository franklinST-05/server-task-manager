import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";

export class CreateBoardController implements Controller {
  
  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    const { email } = req.auth_user!.data;
    return res.status(201).json({
      data: { email }
    });
  }

}