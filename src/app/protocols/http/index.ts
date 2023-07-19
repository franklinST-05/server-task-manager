import { Request, Response } from "express";

export type HttpRequest = Request;
export type HttpResponse<T = any> = Response<T>;

export type HttpDataResponse = { data: object } | { error: string };
