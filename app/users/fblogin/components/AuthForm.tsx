"use client";

import Button from "@/app/components/inputs/Button";
import Input from "@/app/components/inputs/Input";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
type Props = {};

type Variant = "REGISTER";
const AuthForm = (props: Props) => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("REGISTER");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.data?.accessToken) {
      router.push("/users/dashboard/postpool");
    }
  }, [router, session?.data?.accessToken]);

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
    if (variant === "REGISTER") {
      // register

      axios
        .post("/api/register", data)
        .then(() =>
          signIn("credentials", {
            ...data,
            redirect: false,
          })
        )
        .then((callback) => {
          

          if (callback?.error) {
            toast.error("Invalid credentials!");
          }

          if (callback?.ok && !callback?.error) {
            // router.push('/conversations')
            toast.success("User Created!");
          }
        })
        .catch((err) => {
          

          toast.error("Something went wrong!");
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        

        if (callback?.error) {
          toast.error("Invalid credentials!");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
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
          {variant === "REGISTER" && (
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="name"
              label="Name"
            />
          )}
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
              Register
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
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsFacebook}
              onClick={() => socialAction("facebook")}
            />
          </div>
        </div>
        <div
          className="
        flex 
        gap-2 
        justify-center 
        text-sm 
        mt-6 
        px-2 
        text-gray-500
      "
        >
          <button onClick={() => signOut()}>LOG OUT</button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
