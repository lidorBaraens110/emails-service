import { Request, Response, response } from "express";
import service from "../services/email";
import { IEmailBody } from "../interface";

const sendEmail = async (req: Request, res: Response) => {
  try {
    const response = await service(req.body as IEmailBody);
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json(err);
  }
};

export { sendEmail };
