import { UserModel } from "../../../../domain/models/UserModel";
import { sign, verify, JwtPayload } from "../../../../utils/jwt";
import { mail } from "../../../../utils/mail";
import verifyEmailTemplate from "../../../../utils/mail/templates/verify-email";

interface VerificationMail {
  module: string;
  id: string;
  email: string;
}

export const sendVerificationMail = ({ id, email }: UserModel) => {
  const verifyToken = sign<VerificationMail>({
    module: "mail:check", id, email
  }, {
    expiresIn: "10m",
    subject: email
  });

  mail.sendMail({
    to: email,
    html: verifyEmailTemplate({ token: verifyToken }),
    subject: "Confirm Email",
  });
};

export const checkTokenVerificationMail = (token: string): JwtPayload<VerificationMail> | null => {
  const isValidToken = verify<VerificationMail>(token);
  if (!isValidToken) {
    return null;
  }

  const { module } = isValidToken.data;
  if (!module || module !== "mail:check") {
    return null;
  }

  return isValidToken;
};