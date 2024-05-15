"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import failure from "@/assets/payment/failure.svg"
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { setPaymentStatusPage } from '@/redux/slices/app/appSlice'

const Failure = () => {
    const [count, setCount] = useState<number>(10);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        if (count === 0) {
            clearInterval(countInterval);
            router.push("/user/cart");
        }

        return () => {
            clearInterval(countInterval);
            dispatch(setPaymentStatusPage(false));
        };
    }, [count]);

    const handleRedirect = () => {
        dispatch(setPaymentStatusPage(false));
        router.push("/user/cart/checkout");
    }


  return (
    <div className='flex items-center justify-center min-h-[80vh] max-sm:min-h-[70vh]' >
        <div className='w-full flex flex-col items-center justify-center' >
              <Image src={failure} alt='failure' className='w-[400px] max-md:w-[300px] max-sm:w-[200px]' />
              <p className='w-full text-red-color md:text-2xl text-xl text-center font-semibold' >Payment Failed</p>
              <span className='max-md:text-sm' >You will be redirect in {count} seconds</span>
              <button onClick={()=> handleRedirect()} className='px-4 py-1 rounded-lg bg-red-color text-white text-sm md:hover:shadow-lg smooth_transition font-semibold mt-2' >Retry</button>
        </div>
    </div>
  )
}

export async function generateMetadata() {
    return {
      title: "Karteca - Payment Failed",
      description: "Share & Earn money | Shop on Karteca",
    };
  }
  

export default Failure
