"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const CheckoutButton = () => {
    const router = useRouter();
    const path = usePathname().split("/").at(-1);

    const handleCheckout = () => {
        if(path === "cart"){
            router.push("/user/cart/checkout");
            return;
        }
        
    }

  return (
    <button onClick={()=>handleCheckout()} className="w-full text-text-color py-3 font-bold shadow-lg smooth_transition hover:-translate-y-1 flex items-center justify-center bg-primary-color rounded-full">
          {path === "cart"? "Checkout" : "Pay Now"}
</button>
  )
}

export default CheckoutButton
