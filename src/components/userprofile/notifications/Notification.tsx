import React from 'react'
import Image from 'next/image'
import ntfLogo from "@/assets/brand/logo.png"

const Notification = () => {
  return (
    <div className='flex bottom_to_top_ani justify-start py-4 border-t gap-3 smooth_transition hover:bg-primary-color/5 px-2 max-md:px-0' >
        <div className='flex min-w-[60px] max-w-[60px] items-center justify-center' >
            <Image src={ntfLogo} alt='notifications' />
        </div>
        <div className='flex-grow flex text-xs py-1 font-medium flex-col gap-1 justify-between' >
            <p>{"High Fashion Standards? You've met your match! Explore our collection from Ginger, Bossini, Melange & more Lorem, ipsum dolor."}</p>
            <span className='text-gray-500' >02 Feb, 2024</span>
        </div>
    </div>
  )
}

export default Notification