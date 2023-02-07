import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.API_KEY;

export const protectedRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.get("X-API-KEY");
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(403).send({ error: "Unauthorized" });
  }
  next();
};
