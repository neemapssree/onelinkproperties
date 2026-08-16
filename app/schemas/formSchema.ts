import { z } from "zod";

export const FormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long."),

  message: z
    .string()
    .trim()
    .max(1000, "Message is too long.")
    .optional(),
});

export type FormInputType = z.infer<typeof FormSchema>;