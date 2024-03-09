"use client"
import { useState } from "react";
import AddressForm from "./AddressForm"
import AddressInfo from "./AddressInfo"


const Address = ({isFirst}:{isFirst?:boolean}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`border ${!isFirst && "border-t-0"} select-none`} >
        <AddressInfo />
        {!!isOpen && <AddressForm setIsOpen={setIsOpen} />}
    </div>
  )
}

export default Address