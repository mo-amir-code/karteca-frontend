"use client"
import React, { memo, useEffect, useState } from "react";
import { useDeleteCartMutation } from "@/redux/queries/cart/cartAPI";
import { useAddUserWishlistItemMutation, useDeleteUserWishlistItemMutation } from "@/redux/queries/user/userAPI";
import toast from "react-hot-toast";
import { FaTrash, FaHeart } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import { selectIsUserLoggedIn, selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import { selectUserWishlistItems } from "@/redux/slices/user/userSlice";
import { isItemExist } from "@/utils/services";
import { useRouter } from "next/navigation";

const Buttons = ({cartId, isOnMobile, productId}:{cartId:string, isOnMobile?:boolean, productId: string}) => {
    const [isWishlist, setIsWishlist] = useState<boolean>(false);
    const [deleteCartItem] = useDeleteCartMutation();
    const [addItemToUserWishlist] = useAddUserWishlistItemMutation();
    const [deleteItemFromUserWishlist] = useDeleteUserWishlistItemMutation();
    const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
    const loggedInUserId = useAppSelector(selectLoggedInUserId);
    const userWishlistItems = useAppSelector(selectUserWishlistItems);
    const router = useRouter();

    const handleDeleteCartItem = async () => {
        try {
            await deleteCartItem(cartId);
        } catch (error) {
            toast.error("Internal Error Occurred!");
        }
    }

    const handleFavourite = async () => {
      try {
        if (isUserLoggedIn) {
          if (isWishlist)
            await deleteItemFromUserWishlist({userId: loggedInUserId!, productId});
          else
            await addItemToUserWishlist({ userId: loggedInUserId!, productId });
        } else router.push("/auth/signin");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    };

    useEffect(() => {
      if (isUserLoggedIn) {
        setIsWishlist(isItemExist(productId, userWishlistItems));
      }
    }, [userWishlistItems]);

  return (
    <>
      <button onClick={()=>handleDeleteCartItem()} className={`flex items-center justify-center gap-1 text-text-color bg-primary-color ${isOnMobile? "p-1 text-xs rounded-sm" : "text-sm px-4 p-2 rounded-lg shadow-lg" } smooth_transition hover:-translate-y-1`}>
        <FaTrash size={12} />
        <span>Remove</span>
      </button>
      <button onClick={()=>handleFavourite()} className={`flex items-center justify-center text-sm gap-1 px-4 p-2`}>
        <FaHeart className={`${isWishlist? "text-red-color" : "text-tertiary-color"}`} size={14} />
        <span>Wishlist</span>
      </button>
    </>
  );
};

export default memo(Buttons);
