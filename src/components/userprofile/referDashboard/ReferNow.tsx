import Image from "next/image";
import refer from "@/assets/refer/refer.svg";
import ShareAndCode from "./ShareAndCode";

const ReferNow = () => {
  return (
    <div className="flex max-sm:gap-2 w-full mt-32">
      <div className="w-[400px] max-md:w-[200px] max-sm:w-[150px] flex items-center justify-center">
        <div className="w-[200px]">
          <Image src={refer} alt="refer now" />
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-around">
        <div>
          <h5 className="text-lg font-bold max-md:text-base max-sm:text-sm">Refer & Earn</h5>
          <p className="text-sm max-md:text-xs max-sm:text-[10px]">
            Share with your friends, family and audience.
          </p>
          <p className="text-sm max-md:text-xs max-sm:text-[10px] mt-2">
            You can withdrawal money to your bank account and buy any product
            using your earning money.
          </p>
        </div>
        <ShareAndCode referCode="6GY48L" />
      </div>
    </div>
  );
};

export default ReferNow;
