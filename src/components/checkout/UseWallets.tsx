"use client"
import IsLoading from "@/HOC/IsLoading";
import { useUserContext } from "@/context/UserContext";
import { useAppSelector } from "@/redux/hooks";
import { useGetWalletsQuery } from "@/redux/queries/cart/cartAPI";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import React, { useEffect, useState } from "react";
import useFetchCartItems from "../customHooks/useFetchCartItems";
import { returnWalletAmount } from "@/utils/services";
import { COIN_BALANCE } from "@/utils/constants";

const UseWallets = () => {
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    const [walletBalance, setWalletBalance] = useState<number | null>(null);
    const loggedInUserId = useAppSelector(selectLoggedInUserId);
    const { dispatch, selectedPaymentMode } = useUserContext();
    const { data, isLoading, isFetching, isSuccess, isError } = useGetWalletsQuery(loggedInUserId!);
    const { totalAmount } = useFetchCartItems();

    const selectWallet = (wallet:string, amount:number) => {
        if(selectedWallet === wallet){
            setSelectedWallet(null);
            setWalletBalance(null);
        } 
        else {
            setSelectedWallet(wallet);
            setWalletBalance(amount);
        }
    }

    useEffect(() => {
        if(!selectedWallet || !walletBalance){
            dispatch({type: "removeWallet"});
            return;
        }
        dispatch({type: "addWallet", payload:{ name:selectedWallet, amount: walletBalance }});

    }, [selectedWallet, walletBalance]);

  return (
    <IsLoading isLoading={isLoading || isFetching} isSuccess={isSuccess} isError={isError} >
      <div className="container select-none my-4 space-y-4">
        <form>
          <label>
            <input onClick={()=> selectWallet("mainBalance", data?.data?.mainBalance)} type="radio" name="radio" disabled={shouldDisable(data?.data?.mainBalance) ||  selectedPaymentMode === "cash"} checked={selectedWallet === "mainBalance"}  />
            <span className="max-md:text-sm" >Main Balance: ₹{checkIsSelected(totalAmount, (data?.data?.mainBalance || 0), selectedWallet, "mainBalance")}</span>
          </label>
          <label>
            <input onClick={()=> selectWallet(COIN_BALANCE, data?.data?.coinBalance)} type="radio" name="radio" disabled={shouldDisable(data?.data?.coinBalance)} checked={selectedWallet === COIN_BALANCE} />
            <span className="max-md:text-sm" >Shopping Coins: ₹{checkIsSelected(totalAmount, (data?.data?.coinBalance || 0), selectedWallet, COIN_BALANCE)}</span>
          </label>
          <label>
            <input onClick={()=> selectWallet("currentReferralEarning", data?.data?.currentReferralEarning)} type="radio" name="radio" disabled={shouldDisable(data?.data?.currentReferralEarning) ||  selectedPaymentMode === "cash"} checked={selectedWallet === "currentReferralEarning"} />
            <span className="max-md:text-sm" >Referral Earning: ₹{checkIsSelected(totalAmount, (data?.data?.currentReferralEarning || 0), selectedWallet, "currentReferralEarning")}</span>
          </label>
        </form>
        <p className="text-sm max-md:text-xs text-center text-secondary-color" >You can use one of these wallet at a time</p>
      </div>
    </IsLoading>
  );
};

const checkIsSelected = (paidAmout:number, currentAmount:number, selected:string | null, current:string) => {
  if(selected === COIN_BALANCE && selected === current){
    return currentAmount - returnWalletAmount({ totalAmount:paidAmout, amount:currentAmount, name:selected })
  }

  if(selected === current){
    if(paidAmout >= currentAmount) return 0;
    else return currentAmount - paidAmout;
  }
  return currentAmount;
}

const shouldDisable = (amount:number | undefined) => {
    if(!amount || amount === 0) return true;
    return false
}

export default UseWallets;
