"use client";
import SubmitButton from "@/components/auth/SubmitButton";
import InputField from "@/components/checkout/InputField";
import { APIRequestType } from "@/redux/RootTypes";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PaymentOrderType } from "@/redux/queries/cart/cartTypes";
import { useVerifyPaymentMutation } from "@/redux/queries/payment/paymentAPI";
import { RazorpayReponseType, VerifyPaymentType } from "@/redux/queries/payment/paymentType";
import { useAddReferMoneyMutation, useGetReferralDashboardQuery } from "@/redux/queries/refer/referAPI";
import { setReferAddMoneyModal } from "@/redux/slices/app/appSlice";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import { PAYMENT_MAX_AMOUNT, PAYMENT_MIN_AMOUNT } from "@/utils/constants";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";

const AddPaymentModal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const dispatch = useAppDispatch();
  const [addMoney] = useAddReferMoneyMutation();
  const [verifyPayment] = useVerifyPaymentMutation();
  const { refetch } = useGetReferralDashboardQuery(loggedInUserId!, { skip: loggedInUserId? false : true });

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  // const handleVerifyPayment = async ({
  //   response,
  //   transactionId,
  // }: {
  //   response: RazorpayReponseType;
  //   transactionId: string;
  // }) => {
  //   try{
  //   const verifyAPIData: VerifyPaymentType = {
  //     orderId: response.razorpay_order_id,
  //     paymentId: response.razorpay_payment_id,
  //     signature: response.razorpay_signature,
  //     transactionId: transactionId,
  //     isFrom: undefined
  //   };

  //   const { data: verifyData } = (await verifyPayment(verifyAPIData)) as {
  //     data: APIRequestType;
  //   };

  //   if(verifyData?.success){
  //       toast.success("Wallet activated");
  //       refetch();
  //       setIsLoading(false);
  //   }else{
  //     toast.error("Something went wrong");
  //     setIsLoading(false);
  //   }
  //   dispatch(setReferAddMoneyModal(false));
  // }catch(error){
  //   console.log(error);
  //   toast.error("Something went wrong");
  // }
  // };

  // const handleOnSubmit = useCallback(async (amount: number) => {
  //   setIsLoading(true);
  //   setError(null);

  //   try{
  //   if (amount > PAYMENT_MAX_AMOUNT || amount < PAYMENT_MIN_AMOUNT) {
  //     setError(`minimum and maximum amount should be ₹${PAYMENT_MIN_AMOUNT} and ₹${PAYMENT_MAX_AMOUNT}`);
  //     reset();
  //     setIsLoading(false);
  //     return;
  //   }

  //   const { data } = await addMoney({userId:loggedInUserId!, amount}) as { data:APIRequestType }

  //   if(data?.success){
  //       const {
  //           key,
  //           name,
  //           currency,
  //           amount,
  //           orderId,
  //           theme,
  //           prefill,
  //           transactionId,
  //         } = data?.data as PaymentOrderType;
  
  //         const options = {
  //           key: key,
  //           name: name,
  //           currency: currency,
  //           amount: amount,
  //           order_id: orderId,
  //           image: "",
  //           handler: async (response: RazorpayReponseType) =>
  //             await handleVerifyPayment({ response, transactionId }),
  //           prefill,
  //           theme,
  //         };
  
  //         const razr = new window.Razorpay(options);
  //         razr.open();
  //   }else{
  //     toast.error("Something went wrong");
  //     setIsLoading(false);
  //   }

  // }catch(error){
  //   console.log(error);
  //   setIsLoading(false);
  //   toast.error("Something went wrong");
  // }

  // },  [isLoading, error, addMoney, reset]);

  const handleClose = () => dispatch(setReferAddMoneyModal(false));

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center bg-black/50 justify-center fixed_center">
      <div className="w-[600px] relative max-md:w-[400px] mx-4 bg-white shadow-md rounded-lg p-3 space-y-3">
        <h2 className="font-medium text-lg">Add Money</h2>
        <form
          onSubmit={handleSubmit((data: any) =>
            // handleOnSubmit(data.amount as number)
            console.log(data)
          )}
          className="space-y-3"
        >
          <InputField
            register={register}
            icon="amount"
            placeHolder="Enter amount"
            type="number"
            error={error}
          />
          <SubmitButton name="Add Money" isLoading={isLoading} />
        </form>
        <p className="text-xs text-center text-secondary-color">
          Enter amount should be less and equal than ₹{PAYMENT_MAX_AMOUNT} or greater and equal than ₹{PAYMENT_MIN_AMOUNT}
        </p>
        <button
          onClick={() => handleClose()}
          className="absolute top-0 right-2 text-red-color"
        >
          <IoIosClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default AddPaymentModal;
