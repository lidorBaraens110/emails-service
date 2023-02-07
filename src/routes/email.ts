import { Router } from "express";
import { sendEmail } from "../controllers/email";
import { validateRequestScheme } from "../middleware/validate-request-shceme";
import { validateEmailSchema } from "../schema/email-schema-validate";

const router = Router();

router.post(
  "/email/send",
  validateEmailSchema,
  validateRequestScheme,
  sendEmail
);

export default router;
