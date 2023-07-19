import jwtoken from "jsonwebtoken";

export interface SignOptions {
  expiresIn: string;
  subject: string;
}

export function sign<T = object | {module: string}>(data: T, { expiresIn, subject }: SignOptions): string {

  return jwtoken.sign({ data }, process.env.JWT_SECRET!, {
    expiresIn,
    subject
  });
}

export interface JwtPayload<T = { module: string }> {
  id: number;
  iat: number;
  exp: number;
  sub: string;
  data: T;
}

export function verify<T>(token: string): JwtPayload<T> | null {
  try {
    return jwtoken.verify(token, process.env.JWT_SECRET!) as JwtPayload<T>;
  } catch (err) {
    return null;
  }
}