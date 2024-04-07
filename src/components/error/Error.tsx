import React from 'react'
import Image from 'next/image'
import errorImg from "@/assets/error/error.svg"

const Error = () => {
  return (
    <div className='w-full h-full flex items-center justify-center' >
        <Image src={errorImg} loading='lazy' alt='Internal Server Error' className='w-[400px] max-md:w-[300px] max-sm:w-[200px]' />
    </div>
  )
}

export default Error
