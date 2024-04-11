"use client";
import { useCallback, useEffect, useState } from "react";
import InputField from "@/components/checkout/InputField";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import SubmitButton from "../SubmitButton";
import toast from "react-hot-toast";
import { useResendOTPMutation, useResetPasswordMutation } from "@/redux/queries/auth/authAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { useQueryContext } from "@/context/QueryContext";

const ResetPasswordForm = () => {
  const [otpCountDown, setOtpCountDown] = useState<number>(30);
  const [otpCountLoading, setOtpCountDownLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false);
  const { queries } = useQueryContext();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();
  const [resetPassword] = useResetPasswordMutation();
  const [resendOTP] = useResendOTPMutation();

  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleOnSubmit = useCallback(async (data: {
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

      const { data: resData, error } = (await resetPassword(apiData)) as {
        data: APIRequestType;
        error?:{status:number, data:APIRequestType}
      };

      if (resData?.success) {
          router.push("/auth/signin");
          toast.success(resData.message);
      }

      if(error?.data?.success === false){
        toast.error(error?.data?.message);
      }

      setIsLoading(false);
      reset();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [isLoading, handleSubmit, reset, resetPassword]);

  const handleResendOTP = async () => {
    if (otpCountDown !== 0) {
      toast.error("Something went wrong with client");
      return;
    }

    try {
      setOtpCountDownLoading(true);

      const token = queries.get("token");

      const { data: resData, error } = (await resendOTP({
        token: token || undefined,
      })) as {
        data: APIRequestType;
        error?: { status: number; data: APIRequestType };
      };

      if (resData?.success) {
        setOtpCountDown(60);
        toast.success("OTP resent");
      }

      if (error?.status === 401) {
        router.push("/auth/signup");
        toast.error(error?.data?.message);
      }

      if (error?.data?.success === false && error?.status !== 401) {
        toast.error(error?.data?.message);
      }

      setOtpCountDownLoading(false);
    } catch (error) {
      setOtpCountDownLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const to = setTimeout(() => {
      setOtpCountDown((prev) => prev - 1);
    }, 1000);

    if (otpCountDown === 0) {
      clearTimeout(to);
    }

    return () => {
      clearTimeout(to);
    };
  }, [otpCountDown]);

  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        handleOnSubmit(data);
      })}
      className="flex flex-col gap-4 w-full"
    >
      <div>
      <InputField
        register={register}
        placeHolder="Enter OTP*"
        type="number"
        icon="otp"
        />
        <button
          type="button"
          onClick={() => handleResendOTP()}
          disabled={otpCountDown !== 0 || otpCountLoading}
          className="text-sm max-sm:text-xs text-primary-color"
        >
          {otpCountDown === 0
            ? "Resend OTP"
            : `Resend OTP in ${otpCountDown} seconds`}
        </button>
        </div>
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
      <p className="text-xs text-red-color text-center">
        Please check your Gmail spam for the OTP (One Time Password)
      </p>
      <SubmitButton name="Change Password" isLoading={isLoading} />
    </form>
  );
};

export default ResetPasswordForm;
