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
      <button className="px-3 py-1 rounded-full max-md:text-xs text-sm bg-primary-color font-medium flex items-center gap-2">
        <FaShare size={16} />
        <span>Share Now</span>
      </button>
      <button
        onClick={() => handleReferCodeCopy()}
        className="flex items-center gap-2"
      >
        <span className="font-medium">{referCode}</span>
        <IoCopy size={16} className="mt-[2px]" />
      </button>
    </div>
  );
};

export default ShareAndCode;
