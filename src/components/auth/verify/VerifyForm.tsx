"use client"
import SubmitButton from "@/components/auth/SubmitButton";
import InputField from "@/components/checkout/InputField";
import { APIRequestType } from "@/redux/RootTypes";
import { useAppDispatch } from "@/redux/hooks";
import { useVerifyUserMutation } from "@/redux/queries/auth/authAPI";
import { loginUser } from "@/redux/slices/auth/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const VerifyForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [verifyUser] = useVerifyUserMutation();
    const router = useRouter();
    const dispatch = useAppDispatch();

  
    const { register, handleSubmit, reset } = useForm<FormData>();
  
    const handleOnSubmit = async (data: { otp: number }) => {
      try {
        setIsLoading(true);
  
        const { data: resData, error } = (await verifyUser({ otp: data.otp })) as {
          data: APIRequestType;
          error?:{status:number, data:APIRequestType}
        };
  
        if (resData?.success) {
          dispatch(loginUser({userId:resData.data.userId, name:resData.data.name}));
          router.push("/");
          toast.success("Signed up");
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
          placeHolder="Enter OTP here"
          type="number"
          icon="otp"
          isCenter
        />
        <SubmitButton name="Verify OTP" isLoading={isLoading} />
      </form>
    );
}

export default VerifyForm
