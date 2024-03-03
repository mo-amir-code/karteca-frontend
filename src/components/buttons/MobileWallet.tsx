import Link from "next/link";
import React, { memo } from "react";
import { IoWallet } from "react-icons/io5";

const MobileWallet = ({amount}:{amount:string}) => {
  return (
    <Link
      style={{ width: amount.length * 12 + 56 }}
      href={"/user/refer"}
      className="flex items-center justify-center gap-2 bg-primary-color py-1 rounded-md smooth_transition"
    >
      <span>
        <IoWallet size={20} className="text-secondary-color" />
      </span>{" "}
      <span className="whitespace-nowrap" >₹{amount}</span>
    </Link>
  );
};

export default memo(MobileWallet);
