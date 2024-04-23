"use client";
import SubmitButton from "@/components/auth/SubmitButton";
import InputField from "@/components/checkout/InputField";
import { APIRequestType } from "@/redux/RootTypes";
import { useSignupUserMutation } from "@/redux/queries/auth/authAPI";
import { AuthSignupUserType } from "@/redux/queries/auth/authTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signupUser] = useSignupUserMutation();
  const [passwordMatch, setPasswordMatch] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleOnSubmit = async (data: any) => {
    try {

      const { email, name, password,  confirmPassword, gender, state, city} = data;

      if(!email || !name || !password || !confirmPassword || !gender || !state || !city){
        toast.error("Enter all required fields");
        return;
      }

      if(password?.length < 4 || confirmPassword?.length < 4){
        toast.error("Password length must be 4 or greater");
        return;
      }

      if (password !== confirmPassword) {
        setPasswordMatch(true);
        return;
      } else {
        setPasswordMatch(false);
      }
      setIsLoading(true);

      const newData: AuthSignupUserType = {
        name: name,
        email: email,
        referredUserReferCode: data.referredUserReferCode,
        gender: gender,
        password: password,
        phone: data.phone || undefined,
        address: {
          country: "INDIA",
          state: state,
          city: city,
        },
      };

      const { data: resData, error } = (await signupUser(newData)) as {
        data: APIRequestType;
        error?: {
          data: APIRequestType;
          status: number;
        };
      };
      setIsLoading(false);
      reset();

      if (error?.data?.success === false) {
        toast.error(error.data.message);
      }
      
      if (resData?.success) {
        router.push("/auth/verify");
        toast.success("OTP sent")
      }
    } catch (error: any) {
      console.error("Error happend during signup", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data: any) => {
          handleOnSubmit(data);
        })}
        className="flex flex-col gap-4 w-full"
      >
        <InputField
          register={register}
          placeHolder="Full Name*"
          type="text"
          icon="name"
          required
        />
        <InputField
          register={register}
          placeHolder="Email*"
          type="email"
          icon="email"
          required
        />
        <InputField
          register={register}
          placeHolder="Mobile Number"
          type="number"
          icon="phone"
        />
        <InputField
          register={register}
          placeHolder="Male, Female or Transgender*"
          type="text"
          icon="gender"
          required
        />
        <InputField
          register={register}
          placeHolder="Referral Code"
          type="text"
          icon="referredUserReferCode"
        />
        <InputField
          register={register}
          placeHolder="State*"
          type="text"
          icon="state"
          required
        />
        <InputField
          register={register}
          placeHolder="City*"
          type="text"
          icon="city"
          required
        />
        <InputField
          register={register}
          placeHolder="Password*"
          type="password"
          icon="password"
          required
        />
        <InputField
          register={register}
          placeHolder="Confirm Password*"
          type="password"
          icon="confirmPassword"
          required
          error={passwordMatch ? "Password did not matched" : null}
        />
        <div className="flex items-center justify-between">
          <span className="max-md:text-sm max-sm:text-xs">
            Already a member?{" "}
            <Link
              href={"/auth/signin"}
              className="text-primary-color hover:text-secondary-color"
            >
              Signin your account?
            </Link>
          </span>
        </div>
        <SubmitButton name="Sign up" isLoading={isLoading} />
      </form>
    </>
  );
};

export default SignupForm;
