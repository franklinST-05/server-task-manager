import { UserModel } from "../../../../domain/models/UserModel";
import { sign } from "../../../../utils/jwt";

interface AuthPayload {
  module: string;
  username: string;
  email: string;
}

export const randomAuthToken = ({ username, email }: UserModel): string => {
  const authToken = sign<AuthPayload>({
    module: "auth:sign",
    username,
    email
  }, {
    expiresIn: "3d",
    subject: email
  });

  return authToken;
};