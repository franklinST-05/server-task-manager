import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.APPLICATION_USER_MAIL,
    pass: process.env.APPLICATION_PASS_MAIL
  }
});

export interface SendMailProps {
  to: string;
  subject: string;
  text?: string;
  html: string;
}

export const mail = {
  sendMail(props: SendMailProps): Promise<SMTPTransport.SentMessageInfo > {
    const { APPLICATION_NAME, APPLICATION_MAIL } = process.env;

    return transporter.sendMail({
      from: `${APPLICATION_NAME} <${APPLICATION_MAIL}>`,
      ...props,
    });
  }
};