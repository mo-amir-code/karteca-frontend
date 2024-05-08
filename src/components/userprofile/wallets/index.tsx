"use client";
import { useGetWalletsQuery } from "@/redux/queries/cart/cartAPI";
import Wallet from "./Wallet";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import IsLoading from "@/HOC/IsLoading";
import { useGetUserTransactionsQuery } from "@/redux/queries/user/userAPI";
import WithdrawalHistory from "../referDashboard/WithdrawalHistory";
import Withdrawal from "./withdrawal"
import { memo } from "react";

const Index = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const { data, isLoading, isFetching, isSuccess, isError } =
    useGetWalletsQuery(loggedInUserId!, {
      skip: loggedInUserId ? false : true,
    });
  const {data:txnData, isLoading:txnIsLoading, isFetching:txnIsFetching, isSuccess:txnIsSuccess, isError:txnIsError} = useGetUserTransactionsQuery(loggedInUserId!, { skip: loggedInUserId? false : true })

  return (
    <IsLoading isLoading={isLoading || isFetching} isError={isError} isSuccess={isSuccess} >
      <div className="space-y-8">
        <h2 className="text-secondary-color font-medium">My Wallets</h2>
        {!!isSuccess && <div className="flex gap-2 max-[960px]:flex-col">
          <Wallet amount={data?.data?.mainBalance} name="Main Balance" icon="main" />
          <Wallet amount={data?.data?.coinBalance} name="Total Coins" icon="coin" />
          <Wallet amount={data?.data?.currentReferralEarning} name="Referral Earning" icon="refer" />
        </div>}

        <Withdrawal amount={data?.data?.currentReferralEarning}  />

        <IsLoading isLoading={txnIsLoading || txnIsFetching} isError={txnIsError} isSuccess={txnIsSuccess} >
          <WithdrawalHistory data={txnData?.data} />
        </IsLoading>
      </div>
    </IsLoading>
  );
};

export default memo(Index);
