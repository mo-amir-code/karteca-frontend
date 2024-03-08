import Image from "next/image";
import refer from "@/assets/refer/refer.svg";
import ShareAndCode from "./ShareAndCode";

const ReferNow = () => {
  return (
    <div className="flex max-md:justify-between w-full mt-32">
      <div className="flex-[0.5] max-md:flex-[0.3] flex items-center justify-center">
        <div className="w-[200px]">
          <Image src={refer} alt="refer now" />
        </div>
      </div>
      <div className="flex-[0.5] max-md:flex-[0.65] flex flex-col justify-around">
          <div>
            <h5 className="text-lg font-bold max-md:text-base">Refer & Earn</h5>
            <p className="text-sm max-md:text-xs">
              Share with your friends, family and audience.
            </p>
          </div>
          <p className="text-sm max-md:text-xs" >You can withdrawal money to your bank account and buy any product using your earning money.</p>
         <ShareAndCode referCode="6GY48L" />
      </div>
    </div>
  );
};

export default ReferNow;
