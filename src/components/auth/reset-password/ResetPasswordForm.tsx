"use client";
import { useState } from "react";
import { ContactInputField as InputField } from "@/components/checkout/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import SubmitButton from "../SubmitButton";
import toast from "react-hot-toast";
import { useResetPasswordMutation } from "@/redux/queries/auth/authAPI";
import { APIRequestType } from "@/redux/RootTypes";

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const [resetPassword] = useResetPasswordMutation();

  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleOnSubmit = async (data: {
    otp: number;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      setIsLoading(true);
      if (data.password !== data.confirmPassword) {
        setIsLoading(false);
        setPasswordMatch(true);
        return;
      } else {
        setPasswordMatch(false);
      }

      const apiData = {
        token: token!,
        newPassword: data.confirmPassword,
        otp: data.otp
      }

      const { data: resData } = (await resetPassword(apiData)) as {
        data: APIRequestType;
      };

      if (resData?.success) {
          router.push("/auth/signin");
          toast.success(resData.message);
      }

      setIsLoading(false);
      reset();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        handleOnSubmit(data);
      })}
      className="flex flex-col gap-4 w-full"
    >
      <InputField
        register={register}
        placeHolder="Enter OTP*"
        type="number"
        icon="otp"
      />
      <InputField
        register={register}
        placeHolder="Enter Password*"
        type="password"
        icon="password"
      />
      <InputField
        register={register}
        placeHolder="Confirm Password*"
        type="password"
        icon="confirmPassword"
        error={passwordMatch ? "Password did not matched" : null}
      />
      <SubmitButton name="Change Password" isLoading={isLoading} />
    </form>
  );
};

export default ResetPasswordForm;
