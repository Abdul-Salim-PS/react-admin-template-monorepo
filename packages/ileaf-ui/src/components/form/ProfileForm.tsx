import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import HookFormTextInput from "./hook-form/HookFormTextInput";
import Button from "@components/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const defaultProfileSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be 10 digits")
    .optional(),
});

interface ProfileFormProps {
  handleSubmit: (data: FormData) => Promise<void>;
  initialValues: FormData | null;
}

interface FormData {
  first_name: string;
  last_name?: string;
  email: string;
  phone?: string;
}
export type ProfileFormData = z.infer<typeof defaultProfileSchema>;
const ProfileForm: React.FC<ProfileFormProps> = ({
  handleSubmit,
  initialValues,
}) => {
  const methods = useForm<ProfileFormData>({
    resolver: zodResolver(defaultProfileSchema),
    defaultValues: initialValues ?? {},
  });
  const { handleSubmit: formSubmit } = methods;

  const mutation = useMutation({
    mutationFn: handleSubmit,
    onSuccess: () => {
      // Handle success (e.g., show a success message)
    },
    onError: (error) => {
      // Handle error (e.g., show an error message)
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={formSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <HookFormTextInput
            placeholder="Enter your first name"
            containerClass="bg-white"
            name="first_name"
            label="First Name"
          />
          <HookFormTextInput
            placeholder="Enter your last name"
            containerClass="bg-white"
            name="last_name"
            label="Last Name"
          />
          <HookFormTextInput
            placeholder="Enter your email"
            containerClass="bg-white"
            name="email"
            label="Email"
          />
          <HookFormTextInput
            placeholder="Enter your phone number"
            containerClass="bg-white"
            name="phone"
            label="Phone Number"
          />
        </div>
        <Button loaderColor="white" loading={mutation.isPending} type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default ProfileForm;
