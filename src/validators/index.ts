import { ValidationError } from "yup";
import { schema, schemas, schemasKeys } from "./schemas";

export interface ValidSchemaResponse {
  success: boolean;
  error?: string;
}

export const validSchema = async (key: schemasKeys, data: schema<typeof key>): Promise<ValidSchemaResponse> => {
  const validationSchema = schemas[key];

  try {
    await validationSchema.validate(data);
    return { success: true };
  } catch (error) {
    if (error instanceof ValidationError) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "Unknown error" };
  }
};
