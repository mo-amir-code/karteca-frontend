import React from 'react'
import { TiTick } from "react-icons/ti";

const Includes = () => {
  return (
    <div className='space-y-2' >
        <p className='text-sm text-text-secondary-color' >What's includes premium:</p>
        <div>
            <Include msg='Referral Earning Withdrawal' />
            <Include msg="50+ Extra Coupon's" />
            <Include msg="Premium Customer Care Service" />
            <Include msg="Fast Withdrawal" />
        </div>
    </div>
  )
}

export default Includes

const Include = ({msg}:{msg:string}) => {
    return (
        <div className='flex items-center gap-[6px]' >
            <TiTick className='text-primary-color w-5 h-5' />
            <span className='text-xs font-medium text-secondary-color' >{msg}</span>
        </div>
    )
}
