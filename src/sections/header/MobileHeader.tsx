"use client"
import MobileHeaderContent from "@/components/header/MobileHeaderContent"
import { useAppSelector } from "@/redux/hooks";
import { selectIsUserLoggedIn } from "@/redux/slices/auth/authSlice";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

const MobileHeader = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isUp, setIsUp] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if(prevScrollPos > currentScrollPos){
        setIsUp(true)
      }else{
        setIsUp(false)
      }

      setPrevScrollPos(currentScrollPos)

      if(currentScrollPos > 50){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll);
    }

  }, [prevScrollPos]);

  return (
    <div className="w-full md:hidden" >
          <MobileHeaderContent isUserLoggedIn={isUserLoggedIn} isUp={isUp} isScroll={isScroll} path={path} />
          <div className="max-md:h-[111px]" />
    </div>
  )
}

export default MobileHeader
