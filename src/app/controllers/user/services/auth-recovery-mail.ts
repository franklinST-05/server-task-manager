import { UserModel } from "../../../../domain/models/UserModel";
import { sign } from "../../../../utils/jwt";
import { mail } from "../../../../utils/mail";
import verifyEmailTemplate from "../../../../utils/mail/templates/verify-email";

interface AuthRecoveryMail {
  module: string;
  id: string;
  email: string;
}

export const sendAuthRecoveryMail = ({ id, email }: UserModel) => {
  const verifyToken = sign<AuthRecoveryMail>({
    module: "mail:recovery", id, email
  }, {
    expiresIn: "6m",
    subject: email
  });

  mail.sendMail({
    to: email,
    html: verifyEmailTemplate({ token: verifyToken }),
    subject: "Confirm Email",
  });
};

// export const checkTokenVerificationMail = (token: string): JwtPayload<AuthRecoveryMail> | null => {
//   const isValidToken = verify<AuthRecoveryMail>(token);
//   if (!isValidToken) {
//     return null;
//   }

//   const { module } = isValidToken.data;
//   if (!module || module !== "mail:check") {
//     return null;
//   }

//   return isValidToken;
// };