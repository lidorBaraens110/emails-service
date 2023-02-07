import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import logger from "../logger";

export const validateRequestScheme = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    logger.error(errors.array());
    return res.status(400).json({ erorrs: errors.array() });
  }
  next();
};
