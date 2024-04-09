"use client"
import { useAppSelector } from "@/redux/hooks"
import MobileWallet from "../buttons/MobileWallet"
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice"
import useFetchReferEarning from "../customHooks/useFetchReferEarning"

const ClientWallet = () => {
    const loggedInUserId = useAppSelector(selectLoggedInUserId);
    const { referData, referIsSuccess } = useFetchReferEarning(loggedInUserId);

  return (
    <> 
    {!!referIsSuccess && <MobileWallet amount={referData?.data} isFromHeader />}
    </>
  )
}

export default ClientWallet
