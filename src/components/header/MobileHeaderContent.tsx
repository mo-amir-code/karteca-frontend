import { memo } from "react";
import MobileWallet from "@/components/buttons/MobileWallet";
import SearchBar from "@/components/searchbar";
import Logo from "./Logo";

const MobileHeaderContent = ({isUp, isScroll}:{isUp:boolean, isScroll:boolean}) => {

  return (
    <header className={`fixed bg-white top-0 left-0 w-full ${isScroll? isUp? "translate-y-0" : "-translate-y-[50%]" : "translate-y-0"} smooth_transition py-2 px-4 space-y-4 z-20`}>
      <div className="flex items-center justify-between gap-1">
        <Logo />

        <MobileWallet amount="23" />
      </div>

      <div>
        <SearchBar isOnMobile={true} />
      </div>
    </header>
  );
};

export default memo(MobileHeaderContent)