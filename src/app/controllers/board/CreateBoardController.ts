import { Controller, HttpDataResponse, HttpRequest, HttpResponse } from "../../protocols/controller";

export class CreateBoardController implements Controller {
  
  async handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse> {
    return res.status(201).json({
      data: {
        created: true
      }
    });
  }

}