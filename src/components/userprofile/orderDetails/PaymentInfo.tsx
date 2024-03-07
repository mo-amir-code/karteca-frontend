import React from 'react'

const PaymentInfo = () => {
  return (
    <div className='flex border mt-12 p-2 rounded-lg' >
        <div className='flex-[0.5] text-sm' >
            <span className='block font-medium mb-2' >Payment Information</span>
            <p className='text-xs text-gray-500' ><span>Payment Mode:</span> Online</p>
            <p className='text-xs text-gray-500' ><span>Payment Type:</span> UPI</p>
        </div>
        <div className='flex-[0.5] text-sm px-2 space-y-1' >
            <p className='text-xs text-gray-500 border-b py-2 flex items-center justify-between' ><span>Subtotal</span> <span>₹457</span></p>
            <p className='text-xs text-gray-500 border-b py-2 flex items-center justify-between' ><span>Shipping</span> <span>0</span></p>
            <p className='text-xs text-gray-500 flex py-2 items-center justify-between' ><span className='font-medium' >Order Total</span> <span className='text-blue-600' >₹457</span></p>
        </div>
    </div>
  )
}

export default PaymentInfo