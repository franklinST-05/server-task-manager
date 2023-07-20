import { JwtPayload } from "../../../../utils/jwt";

export interface AuthUser {
  module: string;
  id: string;
  email: string;
}

export type AuthUserPayload = JwtPayload<AuthUser>