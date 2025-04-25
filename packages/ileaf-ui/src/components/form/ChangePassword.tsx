import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@components/Button";
import HookFormTextInput from "./hook-form/HookFormTextInput";

const changePasswordSchema = z
  .object({
    new_password: z
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
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

interface ChangePasswordProps {
  handleChangePassword: (data: ChangePasswordData) => Promise<void>;
}

interface ChangePasswordData {
  new_password: string;
  confirm_password: string;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({
  handleChangePassword,
}) => {
  const methods = useForm<ChangePasswordData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

  const { handleSubmit: formSubmit } = methods;

  const mutation = useMutation({
    mutationFn: handleChangePassword,
    onSuccess: () => {
      // Handle success (e.g., show a success message)
    },
    onError: (error) => {
      // Handle error (e.g., show an error message)
    },
  });

  const onSubmit: SubmitHandler<ChangePasswordData> = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={formSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <HookFormTextInput
            placeholder="Enter your new password"
            containerClass="bg-white"
            name="new_password"
            label="New Password"
            isPassword={true}
          />
          <HookFormTextInput
            placeholder="Confirm your new password"
            containerClass="bg-white"
            name="confirm_password"
            label="Confirm Password"
            isPassword={true}
          />
        </div>
        <Button
          disabled={mutation.isPending}
          loaderColor="white"
          loading={mutation.isPending}
          type="submit"
        >
          Change Password
        </Button>
      </form>
    </FormProvider>
  );
};

export default ChangePassword;
