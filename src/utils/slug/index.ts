import slugify from "slugify";

export function toSlug(value: string) {
  return slugify(value, {
    lower: true,
    strict: true,
    replacement: "-",
    trim: true
  });
}