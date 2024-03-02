"use client"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io";

export interface ListType {
    name:string;
    value:string
}

const FilterField = ({list, isFirst}:{list:[ListType], isFirst?:boolean}) => {
    const [selected, setSelected] = useState<ListType>(list[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSelect = ({target}:{target:ListType}) => {
        setSelected(target)
    }


  return (
    <div className={`font-lato bg-white ${!!isFirst? "rounded-tr-md rounded-tl-md" : "border-t"}`} >
        <div onClick={()=>setIsOpen((prev) => !prev)} className="flex p-3 items-center justify-between cursor-pointer" >
        <p className="font-semibold text-base font-lato text-secondary-color" >Sort By : {selected.name}</p>
        <IoIosArrowDown size={18} className={`text-secondary-color mr-2 smooth_transition ${!isOpen? "rotate-0" : "rotate-180"}`} />
        </div>
        {!!isOpen && <div className={`w-full pb-2 overflow-hidden bg-white smooth_transition `} >
            <ul>
                {list.map((li, idx) => (
                    <li key={idx} onClick={()=> handleSelect({target:li})} className={`py-1 cursor-pointer px-3 ${selected.value === li.value? "bg-primary-color" : "hover:bg-primary-color"} smooth_transition`} >{li.name}</li>
                ))}
            </ul>
        </div>}
    </div>
  )
}

export default FilterField