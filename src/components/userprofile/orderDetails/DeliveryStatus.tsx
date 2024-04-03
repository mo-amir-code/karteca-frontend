import React from 'react'

const DeliveryStatus = () => {
  return (
    <div className='mt-4 py-2 bottom_to_top_ani border-t' >
        <p className='text-sm font-medium max-sm:text-xs' >Preparing to ship on March 24, 2021</p>
        <div className='w-full overflow-hidden rounded-lg bg-tertiary-color h-[6px] max-sm:mt-2 mt-4' >
            <div className='w-[30%] bg-primary-color rounded-lg h-[6px]' />
        </div>
        <div className='flex items-center justify-between text-xs max-sm:text-[10px] font-medium px-1 mt-1 text-secondary-color' >
            <span >Order Placed</span>
            <span >Processing</span>
            <span >Shipped</span>
            <span >Delivered</span>
        </div>
    </div>
  )
}

export default DeliveryStatus