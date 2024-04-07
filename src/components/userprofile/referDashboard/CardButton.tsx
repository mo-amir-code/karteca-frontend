"use client"
import { useAppDispatch } from "@/redux/hooks";
import { setReferAddMoneyModal } from "@/redux/slices/app/appSlice";
import React from "react";

const CardButton = ({
    type,
    amount,
    isWithdrawalActive,
  }: {
    type: string;
    amount?: number;
    isWithdrawalActive?: boolean;
  }) => {
    const dispatch = useAppDispatch();


    const handleUnlockWithdrawal = () => {
      if(type === "isWithdrawalActive" && !isWithdrawalActive){
        dispatch(setReferAddMoneyModal(true));
      }
    }


  return (
    <p
    onClick={()=> handleUnlockWithdrawal()}
      className={`font-medium ${isWithdrawalActive === false && "smooth_transition"} max-sm:text-xs ${
        type === "totalEarning"
          ? "text-green-color"
          : type === "totalWithdrawal"
          ? "text-red-color"
          : isWithdrawalActive
          ? "text-green-color text-sm"
          : "text-red-color text-sm"
      }`}
    >
      {type === "isWithdrawalActive"
        ? isWithdrawalActive
          ? "active"
          : "Lock"
        : `₹${amount}`}
    </p>
  );
};

export default CardButton;
