import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/brand/logo.png";
import MobileWallet from "@/components/buttons/MobileWallet";
import SearchBar from "@/components/searchbar";

const MobileHeaderContent = ({isUp, isScroll}:{isUp:boolean, isScroll:boolean}) => {

  return (
    <header className={`fixed bg-white top-0 left-0 w-full ${isScroll? isUp? "translate-y-0" : "-translate-y-[50%]" : "translate-y-0"} smooth_transition py-2 px-4 space-y-4 z-20`}>
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center justify-center w-12 h-12 cursor-pointer max-sm:w-10 max-sm:h-10">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="memik logo"
              layout="fixed"
              height={48}
              width={48}
            />
          </Link>
        </div>

        <MobileWallet amount="23" />
      </div>

      <div>
        <SearchBar isOnMobile={true} />
      </div>
    </header>
  );
};

export default memo(MobileHeaderContent)