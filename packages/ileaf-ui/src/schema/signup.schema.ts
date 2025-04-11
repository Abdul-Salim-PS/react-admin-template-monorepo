import { z } from "zod";

export const defaultSignupSchema = z
  .object({
    first_name: z.string().trim().nonempty("First name is required"),
    last_name: z.string().trim().nonempty("Last name is required"),
    email: z
      .string()
      .trim()
      .nonempty("Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),
    confirm_password: z.string().nonempty("Confirm password is required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });
