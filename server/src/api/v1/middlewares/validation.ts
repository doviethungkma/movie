import { validationResult } from "express-validator";
import { HTTP_STATUS } from "./../utils/constant";
import mongoose from "mongoose";
import { NextFunction, Request, Response } from "express";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: errors.array() });
  }
  next();
};

export const isValidId = (value: string) =>
  mongoose.Types.ObjectId.isValid(value);
