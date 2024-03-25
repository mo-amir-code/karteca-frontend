"use client"
import { useDeleteCartMutation } from "@/redux/queries/cart/cartAPI";
import React, { memo } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaHeart } from "react-icons/fa";

const Buttons = ({cartId}:{cartId:string}) => {
    const [deleteCartItem] = useDeleteCartMutation();


    const handleDeleteCartItem = async () => {
        try {
            await deleteCartItem(cartId);
        } catch (error) {
            toast.error("Internal Error Occurred!");
        }
    }

  return (
    <>
      <button onClick={()=>handleDeleteCartItem()} className="flex items-center justify-center text-sm gap-1 text-text-color bg-primary-color px-4 p-2 rounded-lg shadow-lg smooth_transition hover:-translate-y-1">
        <FaTrash size={12} />
        <span>Remove</span>
      </button>
      <button className="flex items-center justify-center text-sm gap-1 px-4 p-2">
        <FaHeart className="text-red-color" size={14} />
        <span>Wishlist</span>
      </button>
    </>
  );
};

export default memo(Buttons);
