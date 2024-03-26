"use client"
import React, { memo } from "react";
import { quantities } from "@/data";
import { useUpdateCartMutation } from "@/redux/queries/cart/cartAPI";
import toast from "react-hot-toast";

const Quantity = ({quantity, cartId, isOnMobile}:{quantity: number, cartId: string, isOnMobile?:boolean}) => {
    const [updateCart] = useUpdateCartMutation();

    const handleQtyChange = async (qty:number) => {
        try {
            await updateCart({cartId, quantity: qty});
        } catch (error) {
            toast.error("Internal Error Occurred!");
        }
    }

  return (
    <div className={`${!isOnMobile && "space-y-1"}`}>
      <h3 className={`text-base font-medium text-secondary-color text-end max-sm:text-start max-sm:text-sm ${isOnMobile && "hidden"}`}>
        Quantity:
      </h3>
      <div className={` rounded-b-lg px-2 ${isOnMobile? null : "border"}`}>
        <select
          onChange={(e)=> handleQtyChange(parseInt(e.target.value))}
          defaultValue={quantity}
          className="text-sm outline-none w-full text-center bg-transparent"
        >
            {
                quantities.map((qty) => (
                    <option key={qty} value={qty}>{qty}</option>
                ))
            }
        </select>
      </div>
    </div>
  );
};

export default Quantity;
