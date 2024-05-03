"use client";
import InputField from "@/components/checkout/InputField";
import ButtonLoader from "@/components/loader/ButtonLoader";
import { APIRequestType } from "@/redux/RootTypes";
import { useAppSelector } from "@/redux/hooks";
import { WithdrawalRequestVerificationType } from "@/redux/queries/admin/adminTypes";
import { useWithdrawalVerifyMutation } from "@/redux/queries/payment/paymentAPI";
import { selectIsUserLoggedIn } from "@/redux/slices/auth/authSlice";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface WithdrawalVerificationFormType {
  utrId: string,
  upi: string
}

const WithdrawalVerificationForm = ({ withdrawalRequestId, status, setIsModalSelected } : { withdrawalRequestId:string, status:  "success" | "failed" | "verified" | "pending" | "processing", setIsModalSelected:Function }) => {
    const [withdrawalVerify] = useWithdrawalVerifyMutation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WithdrawalVerificationFormType>();

  const handleOnSubmit = useCallback(async (data: WithdrawalVerificationFormType) => {
    try {

     if(!isUserLoggedIn){
        toast.error("Something went wrong!");
        return;
     }

     if(data.utrId.length < 12){
        toast.error("Note length must be 12 characters");
        return;
     }

     const apiData:WithdrawalRequestVerificationType = {
        withdrawalRequestId,
        withdrawalStatus: status,
        utrId: data.utrId,
        upi: data.upi
     }

     setIsLoading(true);

     const {data:resData} = await withdrawalVerify(apiData) as { data: APIRequestType }

     if(resData?.success){
         toast.success("Withdrawal Updated");
     }else{
         toast.error("Something went wrong!");
     }


    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
        reset();
        setIsLoading(false);
        setIsModalSelected(false)
    }
  }, [isLoading, reset, withdrawalVerify, handleSubmit]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-black/40 flex justify-center">
      <div className="max-w-3xl w-full flex items-center justify-center" >
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="w-full space-y-2 flex flex-col items-start p-4 bg-white rounded-lg"
        >
          <h2 className='text-xl font-semibold' >Updating Form</h2>
          <p>You have selected <strong>{status}</strong></p>
                    
          <InputField
            icon="utrId"
            type="text"
            placeHolder="UTR/REFERENCE/TRANSACTION ID"
            register={register}
            required="Pada nhin kya, Enter UTR/REFERENCE/TRANSACTION ID bhai."
            error={errors.upi?.message || undefined}
          />
          
          <InputField
            icon="upi"
            type="text"
            placeHolder="Enter UPI"
            register={register}
            required="Pada nhin kya, Enter UPI bhai."
            error={errors.upi?.message || undefined}
          />

          <div className="flex items-center gap-2" >
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-primary-color text-white font-medium text-sm"
            >
            {
                isLoading? <ButtonLoader color /> : "Update"
            }
          </button>
          <button onClick={()=> setIsModalSelected(false)} type="button" className="px-4 py-2 rounded-md bg-red-color text-white font-medium text-sm" >
            close
          </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default WithdrawalVerificationForm;
