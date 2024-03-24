"use client";
import React, { useState } from "react";
import AddressInputField from "./AddressInputField";
import { useForm } from "react-hook-form";
import { UserAddressFormType, UserAddressType } from "@/redux/queries/user/userTypes";
import { useUserContext } from "@/context/UserContext";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import toast from "react-hot-toast";
import { useAddUserAddressMutation, useUpdateUserAddressMutation } from "@/redux/queries/user/userAPI";
import { APIRequestType } from "@/redux/RootTypes";

const AddressForm = ({data, setIsOpen}:{data?: UserAddressType, setIsOpen?:Function}) => {
  const [addressType, setAddressType] = useState<string>(data?.type || "home");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const {setIsAddressEdit} = useUserContext();
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const [addUserNewAddress] = useAddUserAddressMutation();
  const [updateUserAddress] = useUpdateUserAddressMutation();

  const handleOnSubmit = async (formData: UserAddressFormType) => {
    if(!loggedInUserId){
      toast.error("Something went wrong!");
      return;
    }

    const newAddress:UserAddressType = {
      ...formData,
      userId: loggedInUserId!,
      type: addressType,
      _id: data?._id!
    }

    let resData;

    if(data){
      const res = await updateUserAddress(newAddress) as {data: APIRequestType};
      resData = res.data;
    }else{ 
      const res = await addUserNewAddress(newAddress) as {data: APIRequestType};
      resData = res.data;
    }

    if(setIsOpen) setIsOpen(false);
    else setIsAddressEdit(null)

    if(resData?.success){
      toast.success(data? "Address Upadated" :"Address Added");
    }else{
      toast.error("Something went wrong");
    }
    
    reset();
  };

  const handleFormCancel = () => {
    setIsAddressEdit(null);
    if(setIsOpen) setIsOpen(false);
  }

  return (
    <form
      onSubmit={handleSubmit((data: any) => handleOnSubmit(data))}
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
          defaultValue={data?.name}
        />
        <AddressInputField
          name="email"
          register={register}
          type="email"
          placeholder="Email"
          isRequired={true}
          errors={errors}
          defaultValue={data?.email}
        />
      </div>
      <AddressInputField
        name="address"
        register={register}
        type="text"
        placeholder="Enter Address"
        isRequired={true}
        errors={errors}
        defaultValue={data?.address}
      />
      <div className="flex items-center gap-4">
        <AddressInputField
          name="state"
          register={register}
          type="text"
          placeholder="State"
          isRequired={true}
          errors={errors}
          defaultValue={data?.state}
        />
        <AddressInputField
          name="city"
          register={register}
          type="text"
          placeholder="City/District/Town"
          isRequired={true}
          errors={errors}
          defaultValue={data?.city}
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
          defaultValue={data?.postalCode}
        />
        <AddressInputField
          name="phone"
          register={register}
          type="number"
          placeholder="10-digit mobile number"
          isRequired={true}
          errors={errors}
          defaultValue={data?.phone}
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

      <div className="flex pt-4 items-center gap-3 font-medium text-sm text-text-color">
        <button type="submit" className="px-5 py-3 bg-blue-600">
          SAVE ADDRESS
        </button>
        <span onClick={()=>handleFormCancel()} className="px-5 py-3 text-red-color">CANCEL</span>
      </div>
    </form>
  );
};

export default AddressForm;
