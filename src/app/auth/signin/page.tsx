"use client";
import SubmitButton from "@/components/auth/SubmitButton";
import { ContactInputField as InputField } from "@/components/checkout/Form";
import { useSigninUserMutation } from "@/redux/queries/auth/authAPI";
import { AuthSigninUserType } from "@/redux/queries/auth/authTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signinUser] = useSigninUserMutation();
  const router = useRouter()

  const { register, handleSubmit, reset } = useForm<FormData>();

  const handleOnSubmit = useCallback(async (data: AuthSigninUserType) => {
    try {
      setIsLoading(true);
      const newData: AuthSigninUserType = {
        email: data.email,
        password: data.password,
      };

      const {data:resData} = await signinUser(newData) as {data:APIRequestType};

      if(resData.success){
        router.push("/");
      }
      
      setIsLoading(false);
      reset();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, []);

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
          Forgot Password?{" "}
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

export default Signin;
