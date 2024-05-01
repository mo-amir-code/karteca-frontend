"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import InputField from "@/components/checkout/InputField";
import SubmitButton from '@/components/auth/SubmitButton';
import { useForgotPasswordMutation } from '@/redux/queries/auth/authAPI';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { APIRequestType } from '@/redux/RootTypes';

interface ForgotPasswordFormType{
  email: string
}

const ForgotPasswordForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [forgotPassword] = useForgotPasswordMutation();
    const router = useRouter();
  
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ForgotPasswordFormType>();
  
    const handleOnSubmit = async (data: ForgotPasswordFormType) => {
      try {

        if(!data.email){
          toast.error("Enter registered email to reset your password");
          return;
        }

        setIsLoading(true);
  
        const { data: resData, error } = (await forgotPassword({ email: data.email })) as {
          data: APIRequestType;
          error?:{status:number, data:APIRequestType}
        };
  
        if (resData?.success) {
            router.push("/auth/reset-password")
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
    };
  
    return (
      <form
        onSubmit={handleSubmit((data) => {
          handleOnSubmit(data);
        })}
        className="flex flex-col gap-4 w-full"
      >
        <InputField
          register={register}
          placeHolder="Enter Email Id*"
          type="email"
          icon="email"
          required="Enter email id to reset your password"
          error={errors?.email?.message as string | undefined}
        />
        <p className="text-xs text-center">
        Enter registered email id to reset your password
      </p>
        <SubmitButton name="Send OTP" isLoading={isLoading} />
      </form>
    );
}

export default ForgotPasswordForm
