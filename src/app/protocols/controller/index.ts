import { HttpDataResponse, HttpRequest, HttpResponse } from "../http";

export interface Controller {
  handler(req: HttpRequest, res: HttpResponse<HttpDataResponse>): Promise<HttpResponse>
}

export * from "../http";