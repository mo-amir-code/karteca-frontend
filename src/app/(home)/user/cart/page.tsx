"use client";
import CartBill from "@/components/cart/CartBill";
import CartItems from "@/components/cart/CartItems";
import useFetchCartItems from "@/components/customHooks/useFetchCartItems";
import FullLoader from "@/components/loader/FullLoader";
import { CartItemDataType } from "@/redux/queries/cart/cartTypes";
import { memo } from "react";
import toast from "react-hot-toast";

const Cart = () => {
  const {data, totalAmount, isSuccess, isLoading, isError} = useFetchCartItems();

  if (isError) {
    toast.error("Internal Error Occurred");
  }

  if (isLoading) {
    return <FullLoader />;
  }
  

  return (
    <div className="mx-auto w-full">
      {isSuccess ? (
        data?.data?.length ? (
          <div className="w-full flex justify-center py-4 max-lg:flex-col max-lg:gap-6">
            <CartItems data={data.data as CartItemDataType[]} />
            <div className="flex-[0.35]">
              <CartBill totalAmount={totalAmount} />
            </div>
          </div>
        ) : (
          "null"
        )
      ) : (
        <h2>Server Error</h2>
      )}
    </div>
  );
};

export default memo(Cart);
