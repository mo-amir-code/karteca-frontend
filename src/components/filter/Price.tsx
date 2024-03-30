"use client"
import { useLayoutEffect, useState } from "react"
import { MAX_VALUE } from "@/data"; 
import { IoIosArrowDown } from "react-icons/io";
import { useQueryContext } from "@/context/QueryContext";


const Price = ({isFirst}:{isFirst?:boolean}) => {
    const {queries, handleSetQueries} = useQueryContext();
    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(MAX_VALUE);
    const [minTimedOut, setMinTimedOut] = useState<any>(null)
    const [maxTimedOut, setMaxTimedOut] = useState<any>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOnMinValueChange = (value: any) => {
        if (maxValue > parseInt(value)) {
            setMinValue(parseFloat(value));
        }

        clearTimeout(minTimedOut);
        setMinTimedOut(setTimeout(() => {
            queries.set("minvalue", value);
            handleSetQueries();
        }, 500));
    }


    const handleOnMaxValueChange = (value: any) => {
        if (parseInt(value) > minValue) {
            setMaxValue(parseFloat(value));
        }

        clearTimeout(maxTimedOut);
        setMaxTimedOut(setTimeout(() => {
            queries.set("maxvalue", value);
            handleSetQueries();
        }, 500));
    }


    useLayoutEffect(() => {
        const min = queries.get("minvalue");
        const max = queries.get("maxvalue");
        
        if(min) setMinValue(parseInt(min));
        if(max) setMaxValue(parseInt(max)); 
    }, []);


    return (
        <div className={`font-lato bg-white ${!!isFirst? "rounded-tr-md rounded-tl-md" : "border-t"}`} >
          <div onClick={()=>setIsOpen((prev) => !prev)} className="flex p-3 items-center justify-between cursor-pointer" >
             <p className="font-semibold text-base font-lato text-secondary-color" >Price </p>
             <IoIosArrowDown size={18} className={`text-secondary-color mr-2 smooth_transition ${!isOpen? "rotate-0" : "rotate-180"}`} />
          </div>
        {!!isOpen && <div className="w-full space-y-8 p-3" >
            <div className="relative w-full h-[1px] bg-secondary-color" >
                <input onChange={(event) => handleOnMinValueChange(event.target.value)} type="range" className="absolute top-[50%] z-10 -translate-y-[50%] bg-transparent pointer-events-none appearance-none left-0 w-full input_range" value={minValue} min={0} max={MAX_VALUE} />
                <input onChange={(event) => handleOnMaxValueChange(event.target.value)} type="range" className="absolute top-[50%] z-10 -translate-y-[50%] bg-transparent pointer-events-none appearance-none left-0 w-full input_range" value={maxValue} min={0} max={MAX_VALUE} />
                <div style={{ left: `${minValue / MAX_VALUE * 100}%`, width: `${(maxValue - minValue) / MAX_VALUE * 100}%` }} className="absolute top-0 h-[1px] bg-primary-color" />
            </div>
            <div className="flex items-center justify-around mt-6" >
                <div className="w-[80px] text-center py-2 border-2 text-secondary-color font-medium" >{minValue}</div>
                <span>--</span>
                <div className="w-[80px] text-center py-2 border-2 text-secondary-color font-medium" >{maxValue}</div>
            </div>
        </div>}
        </div>
    )
}

export default Price