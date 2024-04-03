import { memo } from "react";
import MobileWallet from "@/components/buttons/MobileWallet";
import SearchBar from "@/components/searchbar";
import Logo from "./Logo";
import ClientWallet from "./ClientWallet";

const MobileHeaderContent = ({
  isUp,
  isScroll,
  path
}: {
  isUp: boolean;
  isScroll: boolean;
  path:string
}) => {

  return (
    <header
      className={`fixed ${path.startsWith("/user/") && "max-md:bg-primary-color"} bg-white top-0 left-0 w-full ${
        isScroll
          ? isUp
            ? "translate-y-0"
            : "-translate-y-[50%]"
          : "translate-y-0"
      } smooth_transition py-2 px-4 space-y-4 z-20`}
    >
      <div className="flex items-center justify-between gap-1">
        <Logo />
        <ClientWallet />
      </div>

      <SearchBar isOnMobile={true} />
    </header>
  );
};

export default memo(MobileHeaderContent);
