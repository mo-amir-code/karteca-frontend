"use client";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";

const Actions = () => {
  const [isCart, setIsCart] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="absolute transition-all ease-in-out duration-500 translate-y-[100%] group-hover:translate-y-0 top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
      <div className="flex items-center justify-center gap-4">
        <div className="w-[22px]">
          {isFavourite ? (
            <IoMdHeart
              onClick={() => setIsFavourite((prev) => !prev)}
              size={22}
              className="text-primary-color"
            />
          ) : (
            <CiHeart
              onClick={() => setIsFavourite((prev) => !prev)}
              size={22}
              className="text-primary-color"
            />
          )}
        </div>
        <div className="w-[22px]">
          {isCart ? (
            <FaCartShopping
              onClick={() => setIsCart((prev) => !prev)}
              size={20}
              className="text-primary-color"
            />
          ) : (
            <CiShoppingCart
              onClick={() => setIsCart((prev) => !prev)}
              size={22}
              className="text-primary-color"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Actions;
