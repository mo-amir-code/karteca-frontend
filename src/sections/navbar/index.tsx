"use client";
import { mobileNavbar } from "@/data";
import { HiHome, HiBell } from "react-icons/hi";
import { HiWallet, HiUserCircle } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNavbar = () => {
  const [selected, setSelected] = useState(0);
  const pathname = usePathname();

  return (
    <nav
      className={`fixed md:hidden bottom-0 left-0 w-full z-30 p-4 border-t border-secondary-color bg-white ${
        pathname === "/search" && "hidden"
      }`}
    >
      <ul className="flex items-center justify-between">
        {mobileNavbar.map((nav, idx) => (
          <li
            onClick={() => setSelected(idx)}
            key={nav.name}
            className={`cursor-pointer ${
              selected === idx ? "text-primary-color" : ""
            } smooth_transition`}
          >
            <Link href={nav.path}>
              {(() => {
                switch (nav.name) {
                  case "Home":
                    return <HiHome size={24} />;
                  case "Notifications":
                    return <HiBell size={24} />;
                  case "Wallet":
                    return <HiWallet size={24} />;
                  case "User":
                    return <HiUserCircle size={24} />;
                  case "Cart":
                    return <FaCartShopping size={24} />;
                  default:
                    return;
                }
              })()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
