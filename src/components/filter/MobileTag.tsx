"use client"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"


const MobileTag = ({title}:{title:string}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div onClick={()=>setIsOpen((prev) => !prev)} style={{maxWidth: 'max-content'}} className="flex font-lato items-center gap-1 justify-between font-medium pr-1 pl-3 py-2 rounded-full text-xs border-[1.5px]" >
        <span className="whitespace-nowrap">{title}</span>
        <IoIosArrowDown
            size={16}
            className={`text-secondary-color mr-2 smooth_transition ${
              !isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
    </div>
  )
}

export default MobileTag