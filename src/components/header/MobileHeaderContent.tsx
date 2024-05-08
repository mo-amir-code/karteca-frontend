import { memo } from "react";
import SearchBar from "@/components/searchbar";
import Logo from "./Logo";
import MobileButtons from "./MobileButtons";

const MobileHeaderContent = ({
  isUp,
  isScroll,
  path,
  isUserLoggedIn
}: {
  isUp: boolean;
  isScroll: boolean;
  path:string,
  isUserLoggedIn: boolean
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
        <MobileButtons isUserLoggedIn={isUserLoggedIn} />
      </div>

      <SearchBar isOnMobile={true} />
    </header>
  );
};

export default memo(MobileHeaderContent);
