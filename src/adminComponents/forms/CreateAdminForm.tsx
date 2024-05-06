"use client"
import InputField from '@/components/checkout/InputField';
import ButtonLoader from '@/components/loader/ButtonLoader';
import { APIRequestType } from '@/redux/RootTypes';
import { useCreateAdminMutation } from '@/redux/queries/admin/adminAPI';
import { CreateAdminType } from '@/redux/queries/admin/adminTypes';
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';



const CreateAdminForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [createAdmin] = useCreateAdminMutation();


    const {
        handleSubmit,
        register,
        reset,
        formState: { errors }
    } = useForm<CreateAdminType>();

    const handleOnSubmit = useCallback(async (data:CreateAdminType) => {
        try {

            setIsLoading(true);
            const { data:resData, error } = await createAdmin(data) as { data:APIRequestType, error:{data:APIRequestType} }

            if(resData.success){
                toast.success(resData.message);
                reset();
            }

            if(error?.data?.success === false){
                toast.error(error?.data?.message)
            }
            
            setIsLoading(false);
        } catch (error:any) {
            console.error(error);
            toast.error("Something went wrong!");
            setIsLoading(false);
        }
    },  []);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className='max-w-2xl w-full mx-auto space-y-2' >
        <h2 className="text-lg font-semibold ">Make a new admin</h2>
        <InputField 
        register={register}
        placeHolder='Enter user email id to making admin'
        required="Email id is required"
        error={errors.email?.message || undefined}
        type='text'
        icon='email'
        />
        <InputField 
        register={register}
        placeHolder='Enter correct upi id'
        required="UPI ID is required"
        error={errors.upi?.message || undefined}
        type='text'
        icon='upi'
        />
        <button
        type="submit"
        className="px-3 py-2 rounded-md bg-primary-color text-white text-sm"
      >
        {isLoading ? <ButtonLoader color /> : "Create Partner"}
      </button>
    </form>
  )
}

export default CreateAdminForm
