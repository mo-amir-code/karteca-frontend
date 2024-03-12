"use client"
import { FaShare } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";

const ShareAndCode = ({ referCode }: { referCode: string }) => {
  const handleReferCodeCopy = async () => {
    try {
      await navigator.clipboard.writeText(referCode);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-4 max-md:text-xs">
      <button className="px-3 text-text-color py-1 rounded-full max-md:text-xs text-sm bg-primary-color font-medium flex items-center gap-2">
        <FaShare className="w-[16px] max-sm:w-[10px]" />
        <span>Share Now</span>
      </button>
      <button
        onClick={() => handleReferCodeCopy()}
        className="flex items-center gap-2"
      >
        <span className="font-medium">{referCode}</span>
        <IoCopy className="mt-[2px] w-[16px] max-sm:w-[10px]" />
      </button>
    </div>
  );
};

export default ShareAndCode;
