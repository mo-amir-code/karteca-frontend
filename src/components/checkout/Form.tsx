"use client";
import { useForm } from "react-hook-form";
import { memo } from "react";
import InputField from "./InputField";
import {
  UserAddressFormType,
  UserAddressType,
} from "@/redux/queries/user/userTypes";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import toast from "react-hot-toast";
import { useAddUserAddressMutation } from "@/redux/queries/user/userAPI";
import { APIRequestType } from "@/redux/RootTypes";

const Form = () => {
  const { register, handleSubmit, reset } = useForm<UserAddressFormType>();
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const [addAddress] = useAddUserAddressMutation();

  const handleResetFormWithSubmit = async (data: UserAddressFormType) => {
    if (!loggedInUserId) {
      toast.error("Login your account");
      return;
    }

    try {
      const newAddress: UserAddressType = {
        ...data,
        userId: loggedInUserId,
      };

      const {error} = await addAddress(newAddress) as { error:APIRequestType };

      if(error?.data?.success === false){
        toast.error(error?.data?.message);
      }

    } catch (error) {
      toast.error("Internal Error Occurred!");
    } finally {
      reset();
      toast.success("Address added");
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data: any) => handleResetFormWithSubmit(data))}
      className="space-y-4"
    >
      <InputField
        placeHolder="Full name"
        icon="name"
        type="text"
        register={register}
        required
      />
      <InputField
        placeHolder="Email"
        icon="email"
        type="email"
        register={register}
        required
      />
      <InputField
        placeHolder="Address"
        icon="address"
        type="text"
        register={register}
        required
      />
      <div className="flex items-center max-sm:flex-col justify-center gap-2">
        <InputField
          placeHolder="Country"
          icon="country"
          type="text"
          register={register}
          required
        />
        <InputField
          placeHolder="State"
          icon="state"
          type="text"
          register={register}
          required
        />
      </div>
      <div className="flex items-center max-sm:flex-col justify-center gap-2">
        <InputField
          placeHolder="Postal Code"
          icon="postalCode"
          type="number"
          register={register}
          required
        />
        <InputField
          placeHolder="City"
          icon="city"
          type="text"
          register={register}
          required
        />
      </div>
      <div className="flex items-center max-sm:flex-col justify-center gap-2">
        <InputField
          placeHolder="Mobile Number"
          icon="phone"
          type="number"
          register={register}
          required
        />
        <InputField
          placeHolder="Home or Work"
          icon="type"
          type="text"
          register={register}
          required
        />
      </div>
      <button className="px-4 py-2 max-md:py-[6px] max-md:px-3 rounded-lg text-text-color bg-primary-color max-md:text-sm font-semibold shadow-lg hover:-translate-y-1 smooth_transition">
        Submit
      </button>
    </form>
  );
};

export default memo(Form);
