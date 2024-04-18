"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/brand/Logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectDesktop, selectMobile, setMobileProfileMenu, setProfile } from "@/redux/slices/app/appSlice";

const Logo = () => {
  const dispatch = useAppDispatch();
  const { isProfileMenuOpen } = useAppSelector(selectMobile);
  const { profile } = useAppSelector(selectDesktop);
  
  const handleMobileMenu = () => {
    if(profile === "orderDetails") dispatch(setProfile({profile: "orders"}));
    else dispatch(setMobileProfileMenu({isProfileMenuOpen: true}))
  }

  return (
    <div className="flex items-center justify-center w-12 h-12 cursor-pointer max-sm:w-10 max-sm:h-10">
      {isProfileMenuOpen ? (
        <Link href={"/"}>
          <Image
            src={logo}
            alt={process.env.NEXT_PUBLIC_COMPANY_NAME || "karteca"}
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
