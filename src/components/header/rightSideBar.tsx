"use client";
import React, { useState } from "react";
import { navbarData } from "@/data";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import Wallet from "@/components/buttons/Wallet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setProfile } from "@/redux/slices/app/appSlice";

const RightSideBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useRouter();
  const dispatch = useAppDispatch();


  const handleWallet = () => {
    navigate.push("/user/username");
    dispatch(setProfile({profile:"dashboard"}));
  }

  return (
    <div>
      <ul className="flex items-center justify-end gap-8 max-sm:hidden">
        {navbarData.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.path}
              className="flex items-center justify-center gap-2 cursor-pointer"
            >
              {(() => {
                switch (item.name) {
                  case "Cart":
                    return (
                      <FaCartShopping
                        scale={20}
                        className="text-secondary-color"
                      />
                    );
                  case "Profile":
                    return (
                      <FaUser scale={20} className="text-secondary-color" />
                    );
                  default:
                    return;
                }
              })()}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
        <li>
          <Wallet handleClick={handleWallet} amount="1" />
        </li>
      </ul>
      <span className="w-8 h-8 hidden max-md:block cursor-pointer sm:hidden">
        <button
          className={`menu ${menuOpen ? "opened" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Main Menu"
        >
          <svg width="30" height="30" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </span>
    </div>
  );
};

export default RightSideBar;
