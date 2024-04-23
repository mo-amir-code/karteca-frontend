"use client";
import SubmitButton from "@/components/auth/SubmitButton";
import InputField from "@/components/checkout/InputField";
import { useQueryContext } from "@/context/QueryContext";
import { APIRequestType } from "@/redux/RootTypes";
import { useAppDispatch } from "@/redux/hooks";
import {
  useResendOTPMutation,
  useVerifyUserMutation,
} from "@/redux/queries/auth/authAPI";
import { loginUser } from "@/redux/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const VerifyForm = () => {
  const [otpCountDown, setOtpCountDown] = useState<number>(30);
  const [otpCountLoading, setOtpCountDownLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verifyUser] = useVerifyUserMutation();
  const [resendOTP] = useResendOTPMutation();
  const { queries } = useQueryContext();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleOnSubmit = useCallback(
    async (data: { otp: number }) => {
      try {

        if(!data.otp){
          toast.error("Enter OTP");
          return;
        }

        setIsLoading(true);

        const { data: resData, error } = (await verifyUser({
          otp: data.otp,
        })) as {
          data: APIRequestType;
          error?: { status: number; data: APIRequestType };
        };

        if (resData?.success) {
          dispatch(
            loginUser({ userId: resData.data.userId, name: resData.data.name })
          );
          router.push("/");
          toast.success("Signed up");
        }

        if (error?.data?.success === false) {
          toast.error(error?.data?.message);
        }

        setIsLoading(false);
        reset();
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    },
    [isLoading, verifyUser, handleSubmit]
  );

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
          placeHolder="Enter OTP here"
          type="number"
          icon="otp"
          isCenter
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
      <p className="text-xs text-red-color text-center">
        Please check your Gmail spam for the OTP (One Time Password)
      </p>
      <SubmitButton name="Verify OTP" isLoading={isLoading} isDisable={otpCountLoading} />
    </form>
  );
};

export default VerifyForm;
