import { UserModel } from "../../../../domain/models/UserModel";
import { sign } from "../../../../utils/jwt";
import { AuthUser } from "../../../protocols/http/payloads/auth-user";

export const randomAuthToken = ({ id, email }: UserModel): string => {
  const authToken = sign<AuthUser>({
    module: "auth:sign",
    id,
    email
  }, {
    expiresIn: "3d",
    subject: email
  });

  return authToken;
};