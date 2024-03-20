"use client";
import SubmitButton from "@/components/auth/SubmitButton";
import { ContactInputField as InputField } from "@/components/checkout/Form";
import { useSignupUserMutation } from "@/redux/queries/auth/authAPI";
import { AuthSignupUserType } from "@/redux/queries/auth/authTypes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signupUser] = useSignupUserMutation();
  const [passwordMatch, setPasswordMatch] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleOnSubmit = async (data: any) => {
    try {
      if (data.password !== data.confirmPassword) {
        setPasswordMatch(true);
        return;
      }else{
        setPasswordMatch(false)
      }
      setIsLoading(true);

      const newData: AuthSignupUserType = {
        name: data.name,
        email: data.email,
        referredUserReferCode: data.referredUserReferCode,
        gender: data.gender,
        password: data.password,
        phone: data.phone,
        address: {
          country: "INDIA",
          state: data.state,
          city: data.city,
        },
      };

      const { data: resData } = (await signupUser(newData)) as {
        data: APIRequestType;
      };

      if (resData?.success) {
        router.push("/auth/verify");
      }

      setIsLoading(false);
      reset();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
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
          placeHolder="Full Name"
          type="text"
          icon="name"
          required
        />
        <InputField
          register={register}
          placeHolder="Email"
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
          placeHolder="Male, Female or Transgender"
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
          placeHolder="State"
          type="text"
          icon="state"
          required
        />
        <InputField
          register={register}
          placeHolder="City"
          type="text"
          icon="city"
          required
        />
        <InputField
          register={register}
          placeHolder="Password"
          type="password"
          icon="password"
          required
        />
        <InputField
          register={register}
          placeHolder="Confirm Password"
          type="password"
          icon="confirmPassword"
          required
          error={passwordMatch ? "Password did not matched" : null}
        />
        <div className="flex items-center justify-between">
          <span className="hover:text-primary-color smooth_transition">
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
