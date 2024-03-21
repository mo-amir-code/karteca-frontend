"use client"
import SubmitButton from "@/components/auth/SubmitButton";
import { ContactInputField as InputField } from "@/components/checkout/Form";
import { useVerifyUserMutation } from "@/redux/queries/auth/authAPI";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const VerifyForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [verifyUser] = useVerifyUserMutation();
    const router = useRouter();
  
    const { register, handleSubmit, reset } = useForm<FormData>();
  
    const handleOnSubmit = async (data: { otp: string }) => {
      try {
        setIsLoading(true);
  
        const { data: resData } = (await verifyUser({ otp: data.otp })) as {
          data: APIRequestType;
        };
  
        if (resData?.success) {
          router.push("/");
          toast.success("Signed up");
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
