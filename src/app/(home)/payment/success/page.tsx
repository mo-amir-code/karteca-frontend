"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import success from "@/assets/payment/success.svg";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId, selectLoggedInUserName } from "@/redux/slices/auth/authSlice";
import { setMobileProfileMenu, setPaymentStatusPage, setProfile } from "@/redux/slices/app/appSlice";
// import { useGetCartCountsQuery, useGetCartItemsQuery } from "@/redux/queries/cart/cartAPI";
import { useQueryContext } from "@/context/QueryContext";

const Success = () => {
  const [count, setCount] = useState<number>(10);
  const router = useRouter();
  const { queries } = useQueryContext();
  const loggedInUserName = useAppSelector(selectLoggedInUserName);
  // const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const dispatch = useAppDispatch();
  // useGetCartCountsQuery(loggedInUserId!, { skip: !loggedInUserId });
  // useGetCartItemsQuery(loggedInUserId!, { skip: !loggedInUserId });
  const mode = queries.get("mode");
  
  const handleRedirect = useCallback(async () => {
    // await refetch();
    // await refetchCartItems();
    dispatch(setProfile({ profile: "orders" }));
    dispatch(setMobileProfileMenu({ isProfileMenuOpen: false }));
    dispatch(setPaymentStatusPage(false));
    router.push(`/user/${loggedInUserName?.replace(" ", "").toLocaleLowerCase()}`);
  }, [dispatch, setProfile, setMobileProfileMenu, setPaymentStatusPage, router, loggedInUserName]);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(countInterval);
      dispatch(setPaymentStatusPage(false));
      handleRedirect();
    }

    return () => {
      clearInterval(countInterval);
    };
  }, [count]);

  return (
    <div className="flex items-center justify-center min-h-[80vh] max-sm:min-h-[70vh]">
      <div className="w-full flex flex-col items-center justify-center">
        <Image
          src={success}
          alt="success"
          className="w-[400px] max-md:w-[300px] max-sm:w-[200px]"
        />
        <p className="w-full text-green-color md:text-2xl text-xl text-center font-semibold">
          {mode === "online"? "Payment verification request has been sent. Please wait for next 2 hours." : "Order placed"}
        </p>
        <span className="max-md:text-sm">
          You will be redirect in {count} seconds
        </span>
        <button
          onClick={() => handleRedirect()}
          className="px-4 py-1 rounded-lg bg-green-color text-white text-sm md:hover:shadow-lg smooth_transition font-semibold mt-2"
        >
          Redirect
        </button>
      </div>
    </div>
  );
};

export default Success;
