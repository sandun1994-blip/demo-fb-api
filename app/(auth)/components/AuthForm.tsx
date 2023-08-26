"use client";

import Button from "@/app/components/inputs/Button";
import Input from "@/app/components/inputs/Input";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
type Props = {};

type Variant = "LOGIN";
const AuthForm = (props: Props) => {
  const session = useSession();

  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    

    if (session?.status === "authenticated") {
      router.push("/users/fblogin");
    }
  }, [router, session]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "LOGIN") {
      // sigIn

      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          //console.log(callback);

          if (callback?.error) {
            toast.error("Invalid credentials!");
            return;
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Login User");
            router.push("/users");
          }
        })
        .catch((err) => {
          console.log(err);

          toast.error("Invalid credentials!");
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
    bg-white
      px-4
      py-8
      shadow
      sm:rounded-lg
      sm:px-10
    "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email"
            label="Email address"
            type="email"
          />
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="password"
            label="Password"
            type="password"
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              Sign in
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
            absolute 
            inset-0 
            flex 
            items-center
          "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
