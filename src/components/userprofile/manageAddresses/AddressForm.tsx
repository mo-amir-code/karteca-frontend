"use client";
import React, { useState } from "react";
import AddressInputField from "./AddressInputField";
import { useForm } from "react-hook-form";

const AddressForm = ({setIsOpen}:{setIsOpen:Function}) => {
  const [addressType, setAddressType] = useState<string>("home");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleOnSubmit = (data: FormData) => {
    console.log({...data, addressType});
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit((data: FormData) => handleOnSubmit(data))}
      className="p-3 bg-primary-color/5 space-y-3 smooth_transition"
    >
      <span className="font-medium text-lg max-md:text-base max-sm:text-sm" >Add Address</span>
      <div className="flex items-center gap-4">
        <AddressInputField
          name="name"
          register={register}
          type="text"
          placeholder="Name"
          isRequired={true}
          errors={errors}
        />
        <AddressInputField
          name="email"
          register={register}
          type="email"
          placeholder="Email"
          isRequired={true}
          errors={errors}
        />
      </div>
      <AddressInputField
        name="address"
        register={register}
        type="text"
        placeholder="Enter Address"
        isRequired={true}
        errors={errors}
      />
      <div className="flex items-center gap-4">
        <AddressInputField
          name="state"
          register={register}
          type="text"
          placeholder="State"
          isRequired={true}
          errors={errors}
        />
        <AddressInputField
          name="city"
          register={register}
          type="text"
          placeholder="City/District/Town"
          isRequired={true}
          errors={errors}
        />
      </div>
      <div className="flex items-center gap-4">
        <AddressInputField
          name="postalCode"
          register={register}
          type="number"
          placeholder="Pin Code"
          isRequired={true}
          errors={errors}
        />
        <AddressInputField
          name="phone"
          register={register}
          type="number"
          placeholder="10-digit mobile number"
          isRequired={true}
          errors={errors}
        />
      </div>

      {/* Address Type Field */}
      <div className="px-1 text-xs space-y-2 text-gray-500">
        <span className="font-medium">Address Type</span>
        <div className="flex font-medium text-secondary-color items-center gap-3">
          <div className="flex items-center text-xs gap-1">
            <input type="radio" value={"home"} checked={addressType === "home"} onChange={(e)=>setAddressType(e.target.value)} />
            <span>Home</span>
          </div>
          <div className="flex items-center text-xs gap-1">
            <input type="radio" value={"work"} checked={addressType === "work"} onChange={(e)=>setAddressType(e.target.value)} />
            <span>Work</span>
          </div>
        </div>
      </div>
      {/* End Address Type Field */}

      <div className="flex pt-4 items-center gap-3 font-medium text-sm text-white">
        <button type="submit" className="px-5 py-3 bg-blue-600">
          SAVE ADDRESS
        </button>
        <span onClick={()=>setIsOpen(false)} className="px-5 py-3 text-red-color">CANCEL</span>
      </div>
    </form>
  );
};

export default AddressForm;
