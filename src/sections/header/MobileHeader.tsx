"use client"
import MobileHeaderContent from "@/components/header/MobileHeaderContent"
import { useEffect, useState } from "react"

const MobileHeader = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isUp, setIsUp] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos, prevScrollPos)

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
          <MobileHeaderContent isUp={isUp} isScroll={isScroll} />
          <div className="max-md:h-[110px]" />
    </div>
  )
}

export default MobileHeader
