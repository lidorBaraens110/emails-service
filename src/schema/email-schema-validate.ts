import { body, check } from "express-validator";

export const validateEmailSchema = [
  body("to")
    .isEmail()
    .exists({ checkFalsy: true })
    .withMessage("invalid recipient email"),
  body("subject")
    .isString()
    .exists({ checkFalsy: true })
    .withMessage("subject must be a string"),
  body("[text/html]")
    .isString()
    .exists({ checkFalsy: true })
    .withMessage("subject must be a string"),
];
