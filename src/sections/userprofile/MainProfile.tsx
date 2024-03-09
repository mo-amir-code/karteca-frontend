"use client";
import { useAppSelector } from "@/redux/hooks";
import { selectDesktop, selectMobile } from "@/redux/app/appSlice";
import MobileProfile from "@/components/userprofile/mobileMenu";
import useMainProfile from "../../components/customHooks/useMainProfile";

const MainProfile = () => {
  const { profile } = useAppSelector(selectDesktop);
  const { isProfileMenuOpen } = useAppSelector(selectMobile);
  const mainProfile = useMainProfile({ profile });

  return (
    <div className="flex-grow bg-white rounded-lg py-4 px-6 max-md:px-3">
      <div className="max-md:hidden w-full h-full">{mainProfile}</div>
      <div className="md:hidden">
        {isProfileMenuOpen ? <MobileProfile /> : mainProfile}
      </div>
    </div>
  );
};

export default MainProfile;
