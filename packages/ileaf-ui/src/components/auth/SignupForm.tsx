"use client";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HookFormTextInput from "../form/hook-form/HookFormTextInput";
import Button from "../Button";
import { Link } from "react-router-dom";
import { SignupProps } from "../../types/signup.interface";
import useSignup from "@hooks/useSignup";
import { defaultSignupSchema } from "../../schema/signup.schema";

const SignupForm = ({
  buttonText = "Sign Up",
  signupHeader = "Sign Up",
  headerDescription = "Join Us! Create an account to get started.",
  onSubmit,
  onSuccess,
  onError,
  schema = defaultSignupSchema,
  hideSignin = false,
  signinLink = "/login",
  signinText = "Login",
}: SignupProps) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    mode: "onBlur", // Validate fields when they lose focus
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { isPending, error, mutateAsync } = useSignup({
    signup: onSubmit,
    onSuccess: onSuccess,
    onError,
  });

  const onFormSubmit = handleSubmit((data) => {
    return mutateAsync(data);
  });

  return (
    <div className="mx-auto p-6 bg-white">
      <div className="flex flex-col gap-y-2 mb-6">
        <h1 className="text-lg lg:text-2xl font-bold text-gray-800">
          {signupHeader}
        </h1>
        <p className="text-xs lg:text-sm text-gray-600">{headerDescription}</p>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col w-full gap-4"
          noValidate // Disable browser validation to use custom validation
          aria-labelledby="signup-heading"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <HookFormTextInput name="first_name" label="First Name" />
            <HookFormTextInput name="last_name" label="Last Name" />
          </div>

          <HookFormTextInput name="email" label="Email" />

          <HookFormTextInput
            name="password"
            label="Password"
            isPassword={true}
          />

          <HookFormTextInput
            name="confirm_password"
            label="Confirm Password"
            isPassword={true}
          />

          <div className="mt-2">
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting || isPending}
              extraClasses="w-full py-2"
            >
              {isSubmitting || isPending ? "Processing..." : buttonText}
            </Button>
          </div>
          {error && error?.message ? (
            <p className="text-red-500 text-xs">{error?.message}</p>
          ) : (
            ""
          )}
        </form>
      </FormProvider>
      {!hideSignin ? (
        <div className="flex mt-6 justify-center gap-x-2">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link
            className="font-semibold hover:underline text-sm text-primary"
            to={signinLink}
          >
            {signinText}
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SignupForm;
