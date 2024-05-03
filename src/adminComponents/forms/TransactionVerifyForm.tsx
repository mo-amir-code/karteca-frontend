"use client";
import InputField from "@/components/checkout/InputField";
import ButtonLoader from "@/components/loader/ButtonLoader";
import { APIRequestType } from "@/redux/RootTypes";
import { useAppSelector } from "@/redux/hooks";
import { useVerifyPaymentMutation } from "@/redux/queries/payment/paymentAPI";
import { VerifyPaymentType } from "@/redux/queries/payment/paymentType";
import { selectIsUserLoggedIn } from "@/redux/slices/auth/authSlice";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface TransactionVerifyFormType {
  note: string;
}

const TransactionVerifyForm = ({ status, utrId, isFrom, setIsModalSelected } : { status: string, utrId: string, isFrom:string, setIsModalSelected: Function }) => {
    const [verifyPayment] = useVerifyPaymentMutation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionVerifyFormType>();

  const handleOnSubmit = useCallback(async (data: TransactionVerifyFormType) => {
    try {

     if(!isUserLoggedIn){
        toast.error("Something went wrong!");
        return;
     }

     if(data.note.length < 10){
        toast.error("Note length must be 10 characters");
        return;
     }

     const apiData:VerifyPaymentType = {
        adminNote: data.note,
        paymentStatus: status as "success" | "failed" | "pending" | "processing",
        utrId,
        isFrom: isFrom as "shopping" | "subscription"
     }

     setIsLoading(true);

     const {data:resData} = await verifyPayment(apiData) as { data: APIRequestType }

     if(resData?.success){
         toast.success("Transaction Updated");
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
  }, [isLoading, reset, verifyPayment, handleSubmit]);

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
            icon="note"
            type="text"
            placeHolder="Leave a note"
            register={register}
            required="Pada nhin kya, Leave a note."
            error={errors.note?.message || undefined}
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

export default TransactionVerifyForm;
