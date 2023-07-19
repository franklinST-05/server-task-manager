import { compare, genSalt, hash } from "bcrypt";

export const encryptor = {
  async hash(data: string): Promise<string> {
    const salt = await genSalt(12);
    return hash(data, salt);
  },

  async compare(data: string, encrypted: string): Promise<boolean> {
    try {
      return compare(data, encrypted);
    } catch(error) {
      return false;
    }
  }
};