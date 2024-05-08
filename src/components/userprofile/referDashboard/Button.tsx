"use client"
import { useAppDispatch } from '@/redux/hooks';
import { setMobileProfileMenu } from '@/redux/slices/app/appSlice';
import { useRouter } from 'next/navigation'
import React from 'react'

const Button = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    

    const handleModalOpen = () => {
      router.push("/pricing");
      dispatch(setMobileProfileMenu({isProfileMenuOpen: true}))
    }

  return (
    <button onClick={()=>handleModalOpen()} className="font-medium px-5 max-sm:px-3 max-sm:py-2 max-sm:text-xs md:hover:shadow-md py-2 smooth_transition rounded-md bg-primary-color text-white" >Become Premium</button>
  )
}

export default Button
