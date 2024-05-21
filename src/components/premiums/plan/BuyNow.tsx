"use client"
import { PREMIUM_SUBSCRIPTION_AMOUNT } from '@/data';
import { APIRequestType } from '@/redux/RootTypes';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useBuySubscriptionMutation } from '@/redux/queries/payment/paymentAPI';
import { CreateSubscriptionType } from '@/redux/queries/payment/paymentType';
import { selectLoggedInUserId } from '@/redux/slices/auth/authSlice';
import { updateCollectPaymentModal, updateIsFrom, updatePaymentModalInfo } from '@/redux/slices/payment/paymentSlice';
import React, { useCallback } from 'react'
import toast from 'react-hot-toast';
import { FaArrowRight } from "react-icons/fa6";

const BuyNow = () => {
    const loggedInUserId = useAppSelector(selectLoggedInUserId);
    const [buySubscription] = useBuySubscriptionMutation();
    const dispatch = useAppDispatch();


    const handleBuyPlan = useCallback(async () => {
        if(!loggedInUserId){
            toast.error("Login your account");
            return;
        }

        const apiData:CreateSubscriptionType = {
            amount: PREMIUM_SUBSCRIPTION_AMOUNT,
            type: "premium",
            userId: loggedInUserId
        }

        try {
        const {data} = await buySubscription(apiData) as { data: APIRequestType }

        if(data?.success){
            const { paymentQrCodeUrl, transactionId } = data?.data;
            dispatch(updateCollectPaymentModal({ status: true, paymentQR: paymentQrCodeUrl }));
            dispatch(updatePaymentModalInfo({ payableAmount: PREMIUM_SUBSCRIPTION_AMOUNT, transactionId }));
            dispatch(updateIsFrom("subscription"));
        }

    } catch (error) {       
        toast.error("Something went wrong!");
        console.log(error);
    }

    }, [buySubscription, loggedInUserId]);

  return (
    <button onClick={()=> handleBuyPlan()} className=' text-white flex shadow-lg active:scale-95 smooth_transition hover:scale-105 items-center gap-2 justify-center bg-primary-color rounded-full w-full p-3' >
        <span className='text-sm' >
        Activate Withdrawal
        </span>
        <FaArrowRight className='w-4 h-4' />
    </button>
  )
}

export default BuyNow
