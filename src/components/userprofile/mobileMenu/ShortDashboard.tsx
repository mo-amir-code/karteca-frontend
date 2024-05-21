"use client"
import React from 'react'
import Box from './Box'
import { useGetShortReferralDashboardQuery } from '@/redux/queries/refer/referAPI'
import { useAppSelector } from '@/redux/hooks'
import { selectLoggedInUserId, selectLoggedInUserName } from '@/redux/slices/auth/authSlice'
import IsLoading from '@/HOC/IsLoading'
import { ShortDashboardType } from '@/redux/queries/refer/referTypes'
import NameTemplate from './NameTemplate'

const ShortDashboard = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const loggedInUserName = useAppSelector(selectLoggedInUserName);
  const { data, isLoading, isSuccess, isFetching, isError } = useGetShortReferralDashboardQuery(loggedInUserId!, { skip: loggedInUserId? false : true });
  const { totalEarning, totalWithdrawal, totalActive, totalConnections } = data?.data || { totalEarning:0, totalWithdrawal:0, totalActive:0, totalConnections:0 } as ShortDashboardType;

  return (
    <div className='space-y-2' >
    <IsLoading isLoading={isLoading || isFetching} isSuccess={isSuccess} isError={isError} >
    <NameTemplate name={loggedInUserName!} />
    <div className='grid grid-cols-2 gap-2' >
        <Box amount={totalActive} message={"Withdrawal activated connections"} />
        <Box amount={totalConnections} message={"Total Connections"} />
        <Box amount={totalEarning} message={"Total earned money"} />
        <Box amount={totalWithdrawal} message={"Total withdrawal money"} />
    </div>
    </IsLoading>
    </div>
  )
}

export default ShortDashboard