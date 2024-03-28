"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import ButtonLoader from "../loader/ButtonLoader";
import {
  PostOrderItemType,
  PostOrderType,
} from "@/redux/queries/order/orderTypes";
import { useUserContext } from "@/context/UserContext";
import useFetchCartItems from "../customHooks/useFetchCartItems";
import { CartItemDataType } from "@/redux/queries/cart/cartTypes";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import toast from "react-hot-toast";
import { useCreateOrderMutation } from "@/redux/queries/order/orderAPI";
import { APIRequestType } from "@/redux/RootTypes";

const CheckoutButton = () => {
  const router = useRouter();
  const path = usePathname().split("/").at(-1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { selectedAddress, selectedPaymentMode } = useUserContext();
  const { data } = useFetchCartItems();
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const [createOrder] = useCreateOrderMutation();

  const handleCheckout = useCallback(async () => {
    setIsLoading(true);
    if (path === "cart") {
      router.push("/user/cart/checkout");
      setIsLoading(false);
      return;
    }

    if (!loggedInUserId) {
      toast.error("Something went wrong!");
      return;
    }

    try {
      const orders: [PostOrderItemType] = data?.data.map(
        (item: CartItemDataType) => {
          return {
            product: item._id,
            purchasedPrice: item.currentPrice,
            color: item.color,
            quantity: item.quantity,
            deliveryAddress: selectedAddress,
            totalAmount: item.currentPrice * item.quantity,
          };
        }
      );

      const completeOrders: PostOrderType = {
        orders,
        paymentMode: selectedPaymentMode as "online" | "cash",
        userId: loggedInUserId,
      };

      const { data: resData } = (await createOrder(completeOrders)) as {
        data: APIRequestType;
      };

      if(resData.success){
        const razr = new window.Razorpay(resData.data);
        razr.open();
      }

    } catch (error) {
      toast.error("Something went wrong");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [path, isLoading, data, selectedAddress, selectedPaymentMode, createOrder]);

  return (
    <button
      onClick={() => handleCheckout()}
      className="w-full text-text-color py-3 font-bold shadow-lg smooth_transition hover:-translate-y-1 flex items-center justify-center bg-primary-color rounded-full"
    >
      {isLoading ? (
        <ButtonLoader color />
      ) : path === "cart" ? (
        "Checkout"
      ) : (
        "Pay Now"
      )}
    </button>
  );
};

export default CheckoutButton;
