"use client";
import CommonButton from "@/components/buttons/CommonButton";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectDesktop, setProfile } from "@/redux/slices/app/appSlice";

const Buttons = ({
  isWallet,
  title,
}: {
  isWallet?: boolean;
  title: string;
}) => {
  const disptach = useAppDispatch();
  const desktop = useAppSelector(selectDesktop);

  const handleMyWallets = () => {
    disptach(setProfile({ profile: "wallets" }));
  };

  return isWallet ? (
    <Button />
  ) : desktop.profile !== "wallets" && title === "Levels Of Earning" ? (
    <CommonButton name="My Wallets" handleClick={handleMyWallets} />
  ) : null;
};

export default Buttons;
