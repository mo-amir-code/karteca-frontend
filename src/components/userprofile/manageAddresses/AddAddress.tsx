"use client";
import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import AddressForm from "./AddressForm";

const AddAddress = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {!isOpen ? (
        <div onClick={()=>setIsOpen((prev) => !prev)} className="flex items-center text-blue-600 gap-4 p-3 max-sm:p-2 cursor-pointer border mt-3">
          <IoAddSharp size={20} className="" />
          <h4 className=" font-medium max-md:text-sm max-sm:text-xs">
            ADD A NEW ADDRESS
          </h4>
        </div>
      ) : (
        <AddressForm setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default AddAddress;
