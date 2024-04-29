"use client"
import { useRouter } from "next/navigation";
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
    const router = useRouter();
    


    const handleUnlockWithdrawal = () => {
      if(type === "isWithdrawalActive" && !isWithdrawalActive){
        router.push("/premium");
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
