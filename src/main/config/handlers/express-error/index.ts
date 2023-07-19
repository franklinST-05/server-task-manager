/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

export const handlerExpressError = (error: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    error: "Internal server error"
  });
};