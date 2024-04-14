"use client";
import { useUserContext } from "@/context/UserContext";
import React from "react";

const SummaryField = ({title, amount}:{title?:string, amount?:number | string}) => {
  const { wallet, itemTotalAmount } = useUserContext();

  return (wallet || title) ? (
    <h3 className="flex items-center justify-between font-semibold">
      <span>{title || wallet?.name}</span>
      <span className={`${(!title && wallet)? "text-red-color" : null}`} >{(!title && wallet)? "-" : null}₹{amount? amount : (wallet?.amount || 0) > itemTotalAmount? itemTotalAmount : wallet?.amount }</span>
    </h3>
  ) : null;
};
export default SummaryField;

export const TotalAmount = ({totalAmount}:{totalAmount:number}) => {
  const { wallet } = useUserContext();

  return (
    <span>₹{totalAmount > (wallet?.amount || 0)? (totalAmount - (wallet?.amount || 0)) : 0}</span>
  )
}