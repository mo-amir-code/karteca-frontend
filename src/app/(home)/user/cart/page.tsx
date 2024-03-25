"use client";
import CartBill from "@/components/cart/CartBill";
import CartItems from "@/components/cart/CartItems";
import FullLoader from "@/components/loader/FullLoader";
import { useAppSelector } from "@/redux/hooks";
import { useGetCartItemsQuery } from "@/redux/queries/cart/cartAPI";
import { CartItemDataType } from "@/redux/queries/cart/cartTypes";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import { useMemo } from "react";
import toast from "react-hot-toast";

const Cart = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const { data, isLoading, isSuccess, isError } = useGetCartItemsQuery(
    loggedInUserId!
  );

  if (isError) {
    toast.error("Internal Error Occurred");
  }

  if (isLoading) {
    return <FullLoader />;
  }

  const totalAmount = data?.data?.reduce((total: number, item:CartItemDataType) => {
        return item.currentPrice*item.quantity + total
      }, 0);

  return (
    <div className="mx-auto w-full">
      {isSuccess ? (
        data.data.length ? (
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

export default Cart;
