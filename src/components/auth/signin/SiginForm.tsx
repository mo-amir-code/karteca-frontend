"use client";
import SubmitButton from "@/components/auth/SubmitButton";
import { ContactInputField as InputField } from "@/components/checkout/Form";
import { useAppDispatch } from "@/redux/hooks";
import { useSigninUserMutation } from "@/redux/queries/auth/authAPI";
import { AuthSigninUserType } from "@/redux/queries/auth/authTypes";
import { loginUser } from "@/redux/slices/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signinUser] = useSigninUserMutation();
  const router = useRouter()
  const dispatch = useAppDispatch()

  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleOnSubmit = async (data: AuthSigninUserType) => {
    try {
      setIsLoading(true);
      const newData: AuthSigninUserType = {
        email: data.email,
        password: data.password,
      };

      const {data:resData} = await signinUser(newData) as {data:APIRequestType};

      if(resData.success){
        dispatch(loginUser({userId:resData.data.userId, name:resData.data.name}));
        router.push("/");
        toast.success("Logged In");
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
      />
      <InputField
        register={register}
        placeHolder="Password"
        type="password"
        icon="password"
      />
      <div className="flex items-center justify-between">
        <span className="hover:text-primary-color smooth_transition">
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