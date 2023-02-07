import nodemailer from "nodemailer";
import { IEmailBody } from "../interface";
import logger from "../logger";
import { EmailLog } from "../schema/email-schema";

const sendEmailService = async (body: IEmailBody) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "sandbox.smtp.mailtrap.io",
    port: process.env.SMTP_PORT ? +process.env.SMTP_PORT : 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
    },
  });

  const mailOptions = {
    from: `"Email Service" <demo@gmail.com>`, // sender address
    to: body.to, // list of receivers
    subject: body.subject, // Subject line
    text: body["text/html"], // plain text body
    html: body["text/html"], // html body
  };
  // send mail with defined transport object
  const info = await transporter.sendMail(mailOptions);
  if (info.accepted) {
    const emailLog = new EmailLog({
      to: mailOptions.to,
      subject: mailOptions.subject,
      "text/html": mailOptions.text || mailOptions.text,
    });

    emailLog.save((error) => {
      if (error) {
        logger.error(error);
      } else {
        logger.info("Email log saved to database.");
      }
    });
  }
  return info;
};

export default sendEmailService;
