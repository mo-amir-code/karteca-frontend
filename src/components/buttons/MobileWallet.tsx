"use client";
import { setMobileProfileMenu, setProfile } from "@/redux/app/appSlice";
import { useAppDispatch } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { memo } from "react";
import { IoWallet } from "react-icons/io5";

const MobileWallet = ({ amount, isFromHeader }: { amount: string, isFromHeader?:boolean }) => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const path = usePathname();

  const handleNavigate = () => {
    dispatch(setProfile({ profile: "dashboard" }));
    dispatch(setMobileProfileMenu({ isProfileMenuOpen: false }));
    navigate.push("/user/name");
  };

  return (
    <button
      onClick={() => handleNavigate()}
      style={{ width: amount.length * 12 + 56 }}
      className={`flex items-center ${isFromHeader && path.startsWith("/user/")? "max-md:bg-white max-md:text-primary-color" : "max-md:text-text-color"} justify-center gap-2 bg-primary-color py-1 rounded-md smooth_transition`}
    >
      <span>
        <IoWallet size={20} />
      </span>{" "}
      <span className="whitespace-nowrap">₹{amount}</span>
    </button>
  );
};

export default memo(MobileWallet);
