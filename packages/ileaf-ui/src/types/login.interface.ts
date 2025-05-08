import { ReactNode } from "react";
import { ZodSchema } from "zod";

export interface UseLoginInterface {
  login: (data: Record<string, string | number>) => Promise<void>;
  onSuccess: (data: Record<string, string | number>) => void;
  onError?: (error: string) => void;
}

export interface LoginProps {
  emailRegex?: RegExp;
  children?: ReactNode;
  buttonText?: string;
  loginHeader?: string;
  headerDescription?: string;
  onSubmit: (data: Record<string, string | number>) => Promise<void>;
  onSuccess?: (data: Record<string, string | number>) => void;
  onError?: (error: string) => void;
  schema?: ZodSchema;
  hideSignup?: boolean;
  signupLink?: string;
  signupText?: string;
}
