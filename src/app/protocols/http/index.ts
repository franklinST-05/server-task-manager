import { Request, Response } from "express";
import { Payloads } from "./payloads";

export type HttpRequest = Request & Payloads;
export type HttpResponse<T = any> = Response<T>;

export type HttpDataResponse = { data: object } | { error: string };
