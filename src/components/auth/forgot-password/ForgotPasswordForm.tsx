"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ContactInputField as InputField } from "@/components/checkout/Form";
import SubmitButton from '@/components/auth/SubmitButton';
import { useForgotPasswordMutation } from '@/redux/queries/auth/authAPI';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { APIRequestType } from '@/redux/RootTypes';

const ForgotPasswordForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [forgotPassword] = useForgotPasswordMutation();
    const router = useRouter();
  
    const { register, handleSubmit, reset } = useForm<FormData>();
  
    const handleOnSubmit = async (data: { email: string }) => {
      try {
        setIsLoading(true);
  
        const { data: resData } = (await forgotPassword({ email: data.email })) as {
          data: APIRequestType;
        };
  
        if (resData?.success) {
            router.push("/auth/reset-password")
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
          placeHolder="Enter Email Id*"
          type="email"
          icon="email"
        />
        <SubmitButton name="Send OTP" isLoading={isLoading} />
      </form>
    );
}

export default ForgotPasswordForm
