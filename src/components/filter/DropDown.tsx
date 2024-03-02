"use client"
import { useState } from "react"
import { sortList } from "@/data"

interface SortType{
    name: string,
    value: string
}

const DropDown = () => {
    const [selected, setSelected] = useState<SortType>(sortList[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
        <div className="font-semibold cursor-pointer" >
            {selected.name}
            {isOpen && <div className={`absolute top-[100%] left-0 w-full bg-white text-sm py-2 rounded-br-lg rounded-bl-lg`} >
                <ul>
                    {sortList.map((item, idx) => (
                        <li key={idx} className="cursor-pointer py-1 px-2 hover:bg-primary-color smooth_transition" >{item.name}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default DropDown