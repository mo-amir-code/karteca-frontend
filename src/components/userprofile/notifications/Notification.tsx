import React from 'react'
import Image from 'next/image'
import ntfLogo from "@/assets/brand/logo.png"
import { NotificationType } from '@/redux/queries/notification/ntfTypes'
import { getData } from '../referDashboard/WithdrawalHistory'

const Notification = ({data}:{data:NotificationType}) => {
  return (
    <div className={`flex bottom_to_top_ani ${data.isRead? null : "bg-primary-color/5"} rounded-md justify-start py-4 border-t gap-3 smooth_transition hover:bg-primary-color/5 px-2 max-md:px-0`} >
        <div className='flex min-w-[60px] max-w-[60px] items-center justify-center' >
            <Image src={ntfLogo} alt='notifications' />
        </div>
        <div className='flex-grow flex text-xs py-1 font-medium flex-col gap-1 justify-between' >
            <p>{data.message}</p>
            <span className='text-gray-500' >{getData(data.createdAt)}</span>
        </div>
    </div>
  )
}

export default Notification