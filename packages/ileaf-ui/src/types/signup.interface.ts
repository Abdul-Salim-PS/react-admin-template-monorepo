import { ReactNode } from "react";
import { ZodSchema } from "zod";

export interface UseSignupInterface {
  signup: (data: Record<string, string | number>) => Promise<void>;
  onSuccess?: (data: Record<string, string | number>) => void;
  onError?: (error: string) => void;
}

export interface SignupProps {
  emailRegex?: RegExp;
  children?: ReactNode;
  buttonText?: string;
  signupHeader?: string;
  headerDescription?: string;
  onSubmit: (data: Record<string, string | number>) => Promise<void>;
  onSuccess?: (data: Record<string, string | number>) => void;
  onError?: (error: string) => void;
  schema?: ZodSchema;
}
