"use client";
import React, { memo } from "react";
import Card from "./Card";
import LevelEarning from "./LevelEarning";
import WithdrawalHistory from "./WithdrawalHistory";
import ReferNow from "./ReferNow";
import { useGetReferralDashboardQuery } from "@/redux/queries/refer/referAPI";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import { ReferDashboardAPIType } from "@/redux/queries/refer/referTypes";
import IsLoading from "@/HOC/IsLoading";
import { selectReferAddMoneyModal } from "@/redux/slices/app/appSlice";
import AddPaymentModal from "./AddPaymentModal";

const Index = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const { data, isLoading, isFetching, isError, isSuccess } = useGetReferralDashboardQuery(loggedInUserId!) as ReferDashboardAPIType;
  const isModalOpen = useAppSelector(selectReferAddMoneyModal)

  return (
    <>
      <IsLoading isLoading={isFetching || isLoading} isSuccess={isSuccess} isError={isError}>
        <>
        <div>
          <h4 className="font-medium font-poppins">Dashboard</h4>
          <div className="flex flex-wrap items-center mt-4 max-sm:gap-2 max-sm:justify-center gap-4">
            <Card
              type="totalEarning"
              msg="Your referral total earning is"
              amount={data?.data?.totalEarning || 0}
            />
            <Card
              type="totalWithdrawal"
              msg="Your total withdrawal is"
              amount={data?.data?.totalWithdrawal || 0}
            />
            <Card
              type="isWithdrawalActive"
              msg={`Bank withdrawal is`}
              isWithdrawalActive={data?.data?.isWithdrawalPermission || false}
            />
          </div>
          <div className="mt-12 space-y-20">
            <LevelEarning
              data={data?.data?.levelsEarning || []}
              currenAmount={data?.data?.currentEarning || 0}
              isWithdrawalActive={data?.data?.isWithdrawalPermission || false}
            />
            <WithdrawalHistory data={data?.data?.withdrawalHistory || []} />
          </div>
          <ReferNow referCode={data?.data?.referCode} />
        </div>
        {isModalOpen? <AddPaymentModal /> : null}
        </>
      </IsLoading>
    </>
  );
};

export default memo(Index);
