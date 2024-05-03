"use client";
import SubmitButton from "@/components/auth/SubmitButton";
import InputField from "@/components/checkout/InputField";
import { APIRequestType } from "@/redux/RootTypes";
import { useAppDispatch } from "@/redux/hooks";
import { useSigninUserMutation } from "@/redux/queries/auth/authAPI";
import { AuthSigninUserType } from "@/redux/queries/auth/authTypes";
import { loginUser } from "@/redux/slices/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface SigninFormType{
  email: string,
  password: string
}

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signinUser] = useSigninUserMutation();
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { register, handleSubmit, reset, formState: { errors } } = useForm<SigninFormType>();

  const handleOnSubmit = async (data: AuthSigninUserType) => {
    try {
      if(!data.email){
        toast.error("Enter email and password to login your account");
        return;
      }

      setIsLoading(true);
      const newData: AuthSigninUserType = {
        email: data.email,
        password: data.password,
      };

      if(newData.password.length < 4){
        toast.error("Password length must be 4 or greater");
        setIsLoading(false);
        return;
      }

      const res = await signinUser(newData) as {data:APIRequestType, error?:{status:number, data:APIRequestType}};

      if(res?.data?.success){
        const {userId, name, role} = res?.data?.data;
        dispatch(loginUser({userId:userId, name:name, role: role}));
        router.push("/");
        toast.success("Logged In");
      }

      if(res?.error?.data.success === false){
        toast.error(res?.error?.data?.message);
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
        placeHolder="Email"
        type="email"
        icon="email"
        required="Enter email id"
        error={errors.email?.message as string | undefined}
      />
      <InputField
        register={register}
        placeHolder="Password"
        type="password"
        icon="password"
        required="Enter password"
        error={errors.password?.message as string | undefined}
      />
      <div className="flex items-center justify-between">
        <span className="hover:text-primary-color max-md:text-sm max-sm:text-xs smooth_transition">
          <Link href={"/auth/forgot-password"} >
             Forgot Password?{" "}
          </Link>
          <Link
            href={"/auth/signup"}
            className="text-primary-color hover:text-secondary-color"
          >
            Create an account?
          </Link>
        </span>
      </div>
      <SubmitButton name="Sign in" isLoading={isLoading} />
    </form>
  );
};

export default SigninForm