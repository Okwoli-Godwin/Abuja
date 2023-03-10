import { Request, Response, NextFunction } from "express";
import {HttpCode, AppError} from "../Utils/Apperror"

const devErrorHandler = (err: AppError, res: Response) => {
  res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
    status: err.httpCode,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  devErrorHandler(err, res);
};