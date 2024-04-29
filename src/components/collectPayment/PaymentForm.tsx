"use client";
import { useUserContext } from "@/context/UserContext";
import { APIRequestType } from "@/redux/RootTypes";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  useCancelPaymentMutation,
  useVerifyPaymentRequestMutation,
} from "@/redux/queries/payment/paymentAPI";
import { VerifyPaymentRequestType } from "@/redux/queries/payment/paymentType";
import { setPaymentStatusPage } from "@/redux/slices/app/appSlice";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import { selectCollectPaymentModalInfo, selectIsFrom, updateCollectPaymentModal } from "@/redux/slices/payment/paymentSlice";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ButtonLoader from "../loader/ButtonLoader";

const PaymentForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCancelLoading, setIsCancelLoading] = useState<boolean>(false);
  const [verifyPaymentRequest] = useVerifyPaymentRequestMutation();
  const [cancelPayment] = useCancelPaymentMutation();
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const router = useRouter();
  const reduxDispatch = useAppDispatch();
  const collectPaymentModalInfo = useAppSelector(selectCollectPaymentModalInfo);
  const isFrom  = useAppSelector(selectIsFrom);

  const handleOnChange = (value: string) => setInputValue(value);

  const handleVerifyPaymentRequest = async () => {
    try {
      if (inputValue.length < 12) {
        toast.error("Please Enter Correct ID");
        return;
      }

      if (!loggedInUserId) {
        toast.error("Something went wrong!");
        return;
      }

      setIsLoading(true);

      const apiData: VerifyPaymentRequestType = {
        amount: collectPaymentModalInfo?.payableAmount,
        transactionId: inputValue,
        userId: loggedInUserId,
        isFrom: isFrom? isFrom : undefined
      };

      const { data } = (await verifyPaymentRequest(apiData)) as {
        data: APIRequestType;
      };

      if (data?.success) {
        reduxDispatch(setPaymentStatusPage(true));
        reduxDispatch(updateCollectPaymentModal({ status: false, paymentQR: null }));
        router.push("/payment/success?mode=online");
      } else {
        router.push("/payment/failure");
      }
      setIsLoading(false);
    } catch (error) {
        toast.error("Something went wrong!");
        console.log(error);
        setIsLoading(false);
    }
  };

  const handleCancelPayment = async () => {
    if(!collectPaymentModalInfo?.transactionId){
        toast.error("Something went wrong!");
        return;
    }

    try {
        setIsCancelLoading(true);

        const {data} = await cancelPayment({ transactionId: collectPaymentModalInfo?.transactionId! }) as { data: APIRequestType }

        if(data?.success){
            toast.success("Payment has been cancelled");
            reduxDispatch(updateCollectPaymentModal({ status: false, paymentQR: null }));
        }
        
        setIsCancelLoading(false);
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong!");
        setIsCancelLoading(false);
    }

  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h2 className="font-semibold max-md:text-sm text-secondary-color">
          UTR/REFERENCE/TRANSACTION ID**
        </h2>
        <input
          onChange={(e) => handleOnChange(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="UTR/REFERENCE/TRANSACTION ID"
          className="w-full px-3 py-2 max-md:text-sm outline-none border-2 border-primary-color rounded-sm text-secondary-color"
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleVerifyPaymentRequest()}
          className="px-4 max-md:text-sm max-md:py-2 max-md:px-3 rounded-lg smooth_transition active:scale-90 py-3 bg-primary-color text-white font-semibold"
        >
          {isLoading? <ButtonLoader color /> : "Verify Payment"}
        </button>
        <button
          onClick={() => handleCancelPayment()}
          className="px-4 max-md:text-sm max-md:py-2 max-md:px-3 rounded-lg smooth_transition active:scale-90 py-3 bg-red-color text-white font-semibold"
        >
          {isCancelLoading? <ButtonLoader color /> : "Cancel Payment"}
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
