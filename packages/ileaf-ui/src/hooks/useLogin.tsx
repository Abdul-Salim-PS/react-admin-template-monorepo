"use client";
import { useMutation } from "@tanstack/react-query";
import { UseLoginInterface } from "../types/login.interface";

const useLogin = ({ login, onSuccess, onError }: UseLoginInterface) => {
  return useMutation({
    mutationFn: (variables: Record<string, string | number>) =>
      login(variables),
    onSuccess: (_, variables) => {
      onSuccess?.(variables);
    },
    onError: (error) => onError?.(error?.message),
  });
};

export default useLogin;
