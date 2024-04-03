import React from 'react'

const PaymentInfo = ({mode, total, quantity, status}:{mode:string, total:number, quantity: number, status:string}) => {
  return (
    <div className='flex max-sm:flex-col max-sm:gap-4 border mt-12 p-2 rounded-lg' >
        <div className='flex-[0.5] text-sm bottom_to_top_ani' >
            <span className='block font-medium mb-2' >Payment Information</span>
            <p className='text-xs text-gray-500' ><span className='font-medium' >Payment Mode: </span>{mode.toLowerCase()}</p>
            {mode === "online"? <p className='text-xs text-gray-500' ><span className='font-medium' >Payment Status: </span>{status}</p> : null}
        </div>
        <div className='flex-[0.5] bottom_to_top_ani text-sm px-2 space-y-1 max-sm:px-0' >
            <p className='text-xs text-gray-500 border-b py-2 flex items-center justify-between' ><span>Subtotal</span> <span>₹{total}</span></p>
            <p className='text-xs text-gray-500 border-b py-2 flex items-center justify-between' ><span>Quantity</span> <span>{quantity}</span></p>
            <p className='text-xs text-gray-500 border-b py-2 flex items-center justify-between' ><span>Shipping</span> <span>0</span></p>
            <p className='text-xs text-gray-500 flex py-2 items-center justify-between' ><span className='font-medium' >Order Total</span> <span className='text-blue-600' >₹{total}</span></p>
        </div>
    </div>
  )
}

export default PaymentInfo