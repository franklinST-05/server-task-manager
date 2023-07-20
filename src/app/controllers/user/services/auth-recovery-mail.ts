import { UserModel } from "../../../../domain/models/UserModel";
import { JwtPayload, sign, verify } from "../../../../utils/jwt";
import { mail } from "../../../../utils/mail";
import recoveryPasswordTemplate from "../../../../utils/mail/templates/recovery-password";

interface AuthRecoveryMail {
  module: string;
  id: string;
  email: string;
}

export const sendAuthRecoveryMail = (user: UserModel) => {
  const { id, email, username } = user;

  const verifyToken = sign<AuthRecoveryMail>({
    module: "mail:recovery",
    id,
    email
  }, {
    expiresIn: "6m",
    subject: email
  });

  mail.sendMail({
    to: email,
    html: recoveryPasswordTemplate({ token: verifyToken, username }),
    subject: "Change password",
  });
};

export const checkTokenAuthRecoveryMail = (token: string): JwtPayload<AuthRecoveryMail> | null => {
  const isValidToken = verify<AuthRecoveryMail>(token);
  if (!isValidToken) {
    return null;
  }

  const { module } = isValidToken.data;
  if (!module || module !== "mail:recovery") {
    return null;
  }

  return isValidToken;
};
