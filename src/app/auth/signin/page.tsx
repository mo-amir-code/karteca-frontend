"use client"
import SubmitButton from "@/components/auth/SubmitButton";
import { ContactInputField as InputField } from "@/components/checkout/Form";
import Link from "next/link";
import { useForm } from "react-hook-form";

const Sigin = () => {

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FormData>();


  const handleOnSubmit = (data:FormData) => {
    console.log(data);
    reset()
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
      <SubmitButton name="Sign in" />
    </form>
  );
};



export default Sigin;
