import { NextFunction } from "express";
import { HttpRequest, HttpResponse } from "../../../app/protocols/http";
import { AuthUser } from "../../../app/protocols/http/payloads/auth-user";
import * as jwt from "../../../utils/jwt";

export function isAuth(req: HttpRequest, res: HttpResponse, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).end();
  }

  const [, token] = authorization.split(" ");

  const payload = jwt.verify<AuthUser>(token);
  if (!payload || payload.data.module !== "auth:sign") {
    return res.status(401).end();
  }

  req.auth_user = payload;
  return next();
}