"use client"
import { useAppDispatch } from '@/redux/hooks'
import { setReferAddMoneyModal } from '@/redux/slices/app/appSlice';
import React from 'react'

const Button = () => {
    const dispatch = useAppDispatch();

    const handleModalOpen = () => {
        dispatch(setReferAddMoneyModal(true));
    }

  return (
    <button onClick={()=>handleModalOpen()} className="font-medium px-5 md:hover:shadow-md py-2 smooth_transition rounded-md bg-primary-color text-white" >Add Money</button>
  )
}

export default Button
