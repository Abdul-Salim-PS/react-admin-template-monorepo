import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { LuPencil } from "react-icons/lu";
import Button from "@components/Button";
import Spinner from "@components/Spinner";

interface AvatarProps {
  imageUrl: string;
  handleUpload: (file: File) => Promise<void>;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, handleUpload }) => {
  const { control } = useForm();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const mutation = useMutation({
    mutationFn: handleUpload,
    onSuccess: () => {
      // Handle success
    },
    onError: (error) => {
      // Handle error
    },
  });

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      mutation.mutate(file);
    }
  };

  const PencilIcon = LuPencil as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <div className="relative">
      <div className="w-[128px] h-[128px] rounded-full bg-white flex items-center justify-center">
        <img
          src={imageUrl ?? ""}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <Controller
        name="file"
        control={control}
        render={({ field }) => (
          <input
            ref={(e) => {
              inputRef.current = e;
              if (e && field.ref) {
                field.ref(e);
              }
            }}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              field.onChange(e);
              onFileChange(e);
            }}
          />
        )}
      />
      <Button
        disabled={mutation.isPending}
        onClick={() => inputRef.current?.click()}
        className="absolute bottom-2 right-1 bg-primary text-white rounded-full h-8 w-8 flex justify-center items-center"
      >
        {mutation.isPending ? <Spinner color="white" /> : <PencilIcon />}
      </Button>
    </div>
  );
};

export default Avatar;
