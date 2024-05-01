"use client"
import InputField from '@/components/checkout/InputField'
import ButtonLoader from '@/components/loader/ButtonLoader'
import { APIRequestType } from '@/redux/RootTypes'
import { useAppSelector } from '@/redux/hooks'
import { useWithdrawalRequestMutation } from '@/redux/queries/payment/paymentAPI'
import { WithdrawalRequestType } from '@/redux/queries/payment/paymentType'
import { selectLoggedInUserId } from '@/redux/slices/auth/authSlice'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface WithdrawalFormType{
    amount: number, 
    upi: string,
    cUpi: string
}


const WIthdrawalForm = ({ currentEarning }:{ currentEarning:number }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { handleSubmit, register, reset, formState: {errors} } = useForm<WithdrawalFormType>();
    const [withdrawalRequest] = useWithdrawalRequestMutation();
    const loggedInUserId = useAppSelector(selectLoggedInUserId);


    const handleOnSubmit = useCallback(async (data:WithdrawalFormType) => {

      const { upi, cUpi, amount } = data;

      if(!upi || !cUpi || !amount || !loggedInUserId){
        toast.error("Something went wrong!");
        return;
      }

      if(amount > currentEarning){
        toast.error("Insufficient balance");
        return;
      }

      if(upi !== cUpi){
        toast.error("Confirm upi id is not matched");
        return;
      }

      const apiData: WithdrawalRequestType = {
        userId: loggedInUserId,
        amount,
        upi: cUpi
      }

      try {

      setIsLoading(true);

      const { data:resData, error } = await withdrawalRequest(apiData) as { data: APIRequestType, error: { data: APIRequestType } }

      if(resData?.success){
        toast.success(resData.message);
        reset();
      }

      if(error?.data?.success === false){
        toast.error(error?.data?.message);
      }

    } catch (error) {   
      console.log(error)
      toast.error("Something went wrong!");
    } finally{
      setIsLoading(false)
    }
    }, [register, reset]);



  return (
    <form onSubmit={handleSubmit((data) => handleOnSubmit(data))} className='space-y-2' > 
        <InputField 
          icon='amount'
          register={register}
          placeHolder='Enter Withdrawal Amount'
          type='number'
          required="Enter Amount"
          error={errors.amount?.message as string | undefined}
        />
        <div className='flex gap-2 max-md:flex-col' >
        <InputField 
          icon='upi'
          register={register}
          placeHolder='Enter UPI Id'
          type='string'
          required="Enter UPI Id"
          error={errors.upi?.message as string | undefined}
        />
        <InputField 
          icon='cUpi'
          register={register}
          placeHolder='Confirm UPI Id'
          type='string'
          required="Confirm UPI Id"
          error={errors.cUpi?.message as string | undefined}
        />
        </div>
        <button type='submit' className="font-medium px-5 md:hover:shadow-md py-2 smooth_transition rounded-md max-sm:text-sm bg-primary-color text-white" >{isLoading? <ButtonLoader color /> : "Withdrawal"}</button>
    </form>
  )
}

export default WIthdrawalForm
