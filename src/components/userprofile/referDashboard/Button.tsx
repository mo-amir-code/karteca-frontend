"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Button = () => {
    const router = useRouter();
    

    const handleModalOpen = () => {
      router.push("/pricing");
    }

  return (
    <button onClick={()=>handleModalOpen()} className="font-medium px-5 md:hover:shadow-md py-2 smooth_transition rounded-md bg-primary-color text-white" >Become Premium</button>
  )
}

export default Button
