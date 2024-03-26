"use client";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectIsUserLoggedIn } from "@/redux/slices/auth/authSlice";
import { selectUserCartItems } from "@/redux/slices/user/userSlice";
import { isItemInCart } from "@/utils/services";

const Actions = ({productId}:{productId: string}) => {
  const [isCart, setIsCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const userCartItems = useAppSelector(selectUserCartItems);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);

  useEffect(() => {
    if(isUserLoggedIn){
      setIsCart(isItemInCart(productId, userCartItems));
    }
  }, []);

  return (
    <div className="absolute max-md:hidden z-20 transition-all ease-in-out duration-500 translate-y-[100%] group-hover:translate-y-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
      <div className="flex items-center text-text-color justify-center gap-4">
        <div className="w-[22px]">
          {isFavourite ? (
            <IoMdHeart
              size={22}
            />
          ) : (
            <CiHeart
              size={22}
            />
          )}
        </div>
        <div className="w-[22px]">
          {isCart ? (
            <FaCartShopping
              size={20}
            />
          ) : (
            <CiShoppingCart
              size={22}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Actions;
