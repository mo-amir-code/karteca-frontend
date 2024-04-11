"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../checkout/InputField";
import { IoIosClose } from "react-icons/io";
import { useUserContext } from "@/context/UserContext";
import { useUpdateUserPasswordMutation } from "@/redux/queries/user/userAPI";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import toast from "react-hot-toast";
import { APIRequestType } from "@/redux/RootTypes";
import SubmitButton from "../auth/SubmitButton";

export interface ChangePasswordType {
  password: string;
  newPassword: string;
}

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const {dispatch} = useUserContext();
  const [updatePassword] = useUpdateUserPasswordMutation();
  const loggedInUserId = useAppSelector(selectLoggedInUserId);

  const handleOnSubmit = async (data: ChangePasswordType) => {
    if(!loggedInUserId){
      toast.error("Something went wrong");
      handleClose();
      return;
    }

    if(!(data.newPassword.length >= 4)){
      toast.error("Password length should be greater and equal than 4");
      return;
    }

    setIsLoading(true);
    const res = await updatePassword({userId: loggedInUserId, ...data}) as {data: APIRequestType, status: number, error?:{status:number, data:APIRequestType}};

    if(res?.data?.success){
      toast.success(res?.data?.message);
      handleClose();
    }

    if(res?.error?.status === 401){
      toast.error(res?.error?.data?.message);
    }
    
    setIsLoading(false);
  };

  const handleClose = () => {
    dispatch({type:"changePassword", payload: false});
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full h-full flex bg-black/50 items-center justify-center fixed_center">
      <div className="w-[500px] max-md:w-[400px] mx-4 relative rounded-lg bg-white p-4" >
        <h2 className="text-lg font-medium pb-4 max-md:text-base">Change Password</h2>
        <form
          onSubmit={handleSubmit((data: any) => handleOnSubmit(data))}
          className="space-y-4 w-full"
        >
          <InputField
            register={register}
            type="password"
            placeHolder="Enter Old Password"
            icon="password"
          />
          <InputField
            register={register}
            type="password"
            placeHolder="Enter New Password"
            icon="newPassword"
          />
          <SubmitButton isLoading={isLoading} name="Change Password" />
        </form>
        <button onClick={()=>handleClose()} className="absolute top-4 right-4 text-red-color" ><IoIosClose size={24} /></button>
      </div>
    </div>
  );
};

export default ChangePassword;
