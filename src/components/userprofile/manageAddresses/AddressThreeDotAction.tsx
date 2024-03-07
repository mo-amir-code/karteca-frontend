"use client"
import { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const AddressThreeDotAction = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative" >
        <PiDotsThreeVerticalBold size={20} onClick={()=>setIsOpen((prev) => !prev)} className="cursor-pointer" />
        {isOpen && <div style={{width: "max-content"}} className="absolute rounded-md top-full -left-[200%] w-full bg-white shadow-md" >
            <div className="flex flex-col py-2 px-3 text-sm" >
            <span className="cursor-pointer" >Edit</span>
            <span className="cursor-pointer" >Delete</span>
            </div>
        </div>}
    </div>

  )
};

export default AddressThreeDotAction;
