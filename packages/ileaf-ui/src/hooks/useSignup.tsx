"use client";
import { useMutation } from "@tanstack/react-query";
import { UseSignupInterface } from "../types/signup.interface";

const useSignup = ({ signup, onSuccess, onError }: UseSignupInterface) => {
  return useMutation({
    mutationFn: (variables: Record<string, string | number>) =>
      signup(variables),
    onSuccess: (_, variables) => {
      onSuccess?.(variables);
    },
    onError: (error) => onError?.(error?.message),
  });
};

export default useSignup;
