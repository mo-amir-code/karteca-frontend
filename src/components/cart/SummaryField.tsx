"use client";
import { useUserContext } from "@/context/UserContext";
import { COIN_BALANCE } from "@/utils/constants";
import { returnWalletAmount } from "@/utils/services";
import React from "react";

const SummaryField = ({title, amount}:{title?:string, amount?:number | string}) => {
  const { wallet, itemTotalAmount } = useUserContext();

  return (wallet || title) ? (
    <h3 className="flex items-center justify-between font-semibold">
      <span>{title || wallet?.name}</span>
      <span className={`${(!title && wallet)? "text-red-color" : null}`} >{(!title && wallet)? "-" : null}₹{amount? amount : ((wallet?.amount || 0) > itemTotalAmount && wallet?.name !== COIN_BALANCE)? itemTotalAmount : returnWalletAmount({totalAmount:itemTotalAmount, amount:wallet?.amount, name:wallet?.name}) }</span>
    </h3>
  ) : null;
};
export default SummaryField;

export const TotalAmount = ({totalAmount}:{totalAmount:number}) => {
  const { wallet, itemTotalAmount } = useUserContext();

  return (
    <span>₹{totalAmount > (wallet?.amount || 0)? (totalAmount - returnWalletAmount({totalAmount:itemTotalAmount, amount:wallet?.amount, name:wallet?.name})) : 0}</span>
  )
}