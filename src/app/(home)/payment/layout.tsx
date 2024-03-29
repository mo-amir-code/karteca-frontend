"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectIsPaymentStatusPageEnable, setPaymentStatusPage,
} from "@/redux/slices/app/appSlice";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  const isPaymentPageEnable = useAppSelector(selectIsPaymentStatusPageEnable);
  const router = useRouter();
  const dispatch = useAppDispatch();

  if (!isPaymentPageEnable) {
    router.push("/");
    return null;
  }

  useEffect(() => {
    const handlePayment = () => {
      dispatch(setPaymentStatusPage(false));
    };

    window.addEventListener('beforeunload', handlePayment);

    return () => {
      window.removeEventListener('beforeunload', handlePayment);
    };
  }, []); 

  return <>{children}</>;
};

export default layout;
