"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/brand/logo.png";
import { FiArrowLeft } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectMobile, setMobileProfileMenu } from "@/redux/app/appSlice";

const Logo = () => {
  const { isProfileMenuOpen } = useAppSelector(selectMobile);
  const dispatch = useAppDispatch();
  
  const handleMobileMenu = () => {
    dispatch(setMobileProfileMenu({isProfileMenuOpen: true}))
  }

  return (
    <div className="flex items-center justify-center w-12 h-12 cursor-pointer max-sm:w-10 max-sm:h-10">
      {isProfileMenuOpen ? (
        <Link href={"/"}>
          <Image
            src={logo}
            alt="memik logo"
            layout="fixed"
            height={48}
            width={48}
          />
        </Link>
      ) : (
        <FiArrowLeft onClick={()=>handleMobileMenu()} className="text-text-color" size={24} />
      )}
    </div>
  );
};

export default Logo;
