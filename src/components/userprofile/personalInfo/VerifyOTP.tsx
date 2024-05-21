"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../checkout/InputField";
import { IoIosClose } from "react-icons/io";
import { useUserContext } from "@/context/UserContext";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import toast from "react-hot-toast";
import { APIRequestType } from "@/redux/RootTypes";
import SubmitButton from "../../auth/SubmitButton";
import {
  useVerifyUserMutation,
} from "@/redux/queries/auth/authAPI";

export interface OTPVerifyType {
  otp: number;
}

const VerifyOTP = ({
  setIsUpdateAllow,
  setIsVerifyOTPOpen
}: {
  setIsUpdateAllow: Function;
  setIsVerifyOTPOpen: Function;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPVerifyType>();
  const [verifyOTP] = useVerifyUserMutation();
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const { email } = useUserContext();

  const handleOnSubmit = async (data: OTPVerifyType) => {
    if (!loggedInUserId || !email) {
      toast.error("Something went wrong");
      return;
    }

    if (!(data.otp.toString().length === 6)) {
      toast.error("Please enter 6 digit OTP");
      return;
    }

    setIsLoading(true);

    try {
      const res = (await verifyOTP({ otp: data.otp, from: "newEmail" })) as {
        data: APIRequestType;
        error: { data: APIRequestType };
      };

      if (res?.data?.success) {
        // toast.success(res?.data?.message);
        setIsUpdateAllow(true);
      }

      if (res?.error?.data.success === false) {
        toast.error(res?.error?.data?.message);
      }

      setIsLoading(false);
    } catch (error) {
        console.error(error);
        toast.error("Something Error Happened!");
        setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsVerifyOTPOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full h-full flex bg-black/50 items-center justify-center fixed_center">
      <div className="w-[500px] max-md:w-[400px] mx-4 relative rounded-lg bg-white p-4">
        <h2 className="text-lg font-medium pb-4 max-md:text-base">
          Verify OTP
        </h2>
        <form
          onSubmit={handleSubmit((data: any) => handleOnSubmit(data))}
          className="space-y-4 w-full"
        >
          <InputField
            register={register}
            type="number"
            placeHolder="Enter OTP"
            icon="otp"
            required="OTP is required"
            error={errors.otp?.message as string | undefined}
          />
          <p className="text-xs text-red-color text-center">
        Please check your Gmail spam for the OTP (One Time Password)
      </p>
          <SubmitButton isLoading={isLoading} name="Verify OTP" />
        </form>
        <button
          onClick={() => handleClose()}
          className="absolute top-4 right-4 text-red-color"
        >
          <IoIosClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;
