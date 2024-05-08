"use client"
import { useRouter } from "next/navigation";
import CommonButton from "../buttons/CommonButton";
import ClientWallet from "./ClientWallet";

const MobileButtons = ({isUserLoggedIn}:{isUserLoggedIn: boolean}) => {
    const router = useRouter();

    const handleNavigateToAuth = () => router.push("/auth/signin");

  return (
    <>
    {
        isUserLoggedIn? <ClientWallet /> : <CommonButton name="Log in" handleClick={handleNavigateToAuth} />
    }
    </>
  )
}

export default MobileButtons
