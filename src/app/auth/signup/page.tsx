"use client"
import SubmitButton from "@/components/auth/SubmitButton";
import { ContactInputField as InputField } from "@/components/checkout/Form";
import Link from "next/link";
import { useForm } from "react-hook-form";

const page = () => {

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormData>();


  const handleOnSubmit = (data:FormData) => {
    console.log(data);
    reset();
  }


  return (
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
      />
      <InputField
        register={register}
        placeHolder="Mobile Number"
        type="number"
        icon="phone"
      />
      <InputField
        register={register}
        placeHolder="Referral Code"
        type="text"
        icon="referCode"
      />
      <InputField
        register={register}
        placeHolder="State"
        type="text"
        icon="state"
      />
      <InputField
        register={register}
        placeHolder="City"
        type="text"
        icon="city"
      />
      <InputField
        register={register}
        placeHolder="Password"
        type="password"
        icon="password"
      />
      <InputField
        register={register}
        placeHolder="Confirm Password"
        type="password"
        icon="password"
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
      <SubmitButton name="Sign up" />
    </form>
  );
};



export default page;
