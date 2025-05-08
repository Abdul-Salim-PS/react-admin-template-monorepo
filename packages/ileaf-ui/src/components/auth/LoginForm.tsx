"use client";

import { z } from "zod";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import Button from "../Button";
import { LoginProps } from "../../types/login.interface";
import HookFormTextInput from "../form/hook-form/HookFormTextInput";
import useLogin from "@hooks/useLogin";

const LoginForm = ({
  emailRegex,
  children,
  buttonText = "Login",
  loginHeader = "Login",
  headerDescription = "Welcome back! Please login to your account",
  onSubmit = async (val) => console.log(val),
  onSuccess = async (val) => console.log(val),
  onError = async (err) => console.log(err),
  schema,
  hideSignup = false,
  signupLink = "/signup",
  signupText = "Sign up",
}: LoginProps) => {
  const defaultLoginSchema = z.object({
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid email address")
      .refine((value) => !emailRegex || emailRegex.test(value), {
        message: "Email does not match the required format",
      }),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .nonempty("Password is required"),
  });

  const methods = useForm({
    resolver: zodResolver(schema ? schema : defaultLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;
  const { isPending, error, mutateAsync } = useLogin({
    login: onSubmit,
    onSuccess: onSuccess,
    onError,
  });

  const onFormSubmit = handleSubmit((data) => {
    return mutateAsync(data);
  });

  return (
    <div className="">
      <div className="flex flex-col gap-y-1 mb-5">
        <h1 className="text-lg lg:text-2xl font-bold">{loginHeader}</h1>
        <p className="text-xs lg:text-sm font-medium">{headerDescription}</p>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={onFormSubmit} className="flex flex-col w-full gap-6">
          {children ? (
            <>{children}</>
          ) : (
            <>
              <HookFormTextInput name="email" label="Email" />
              <div className="flex flex-col gap-2">
                <HookFormTextInput
                  name="password"
                  label="Password"
                  isPassword={true}
                />
                <div className="w-full flex justify-end">
                  <Link to="/forgot-password" className="w-fit">
                    <p className="text-sm">Forgot Password ?</p>
                  </Link>
                </div>
              </div>
            </>
          )}
          <Button
            loading={isPending}
            disabled={isPending}
            variant="primary"
            type="submit"
          >
            {buttonText}
          </Button>
          {error && error?.message ? (
            <p className="text-red-500 text-xs">{error?.message}</p>
          ) : (
            ""
          )}
        </form>
      </FormProvider>
      {!hideSignup ? (
        <div className="flex mt-5 justify-center gap-x-2">
          <p className="text-sm font-normal">Don&apos;t have an account?</p>
          <Link
            className="font-semibold hover:underline text-sm text-primary"
            to={signupLink}
          >
            {signupText}
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginForm;
