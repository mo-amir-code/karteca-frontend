import { memo } from "react";
import { TfiSearch } from "react-icons/tfi";

const SearchBar = ({isOnMobile}:{isOnMobile?:boolean}) => {
  return (
    <div style={isOnMobile? {maxWidth: "100%"} : {}} className={`flex smooth_transition items-center gap-2 justify-start bg-[#F0F5FF] max-sm:max-w-[180px] rounded-md max-sm:py-1 py-2 px-3 flex-grow max-w-[400px] min-w-[200px] ${isOnMobile? "border-[1.5px]" : "hover:shadow-md"}`} >
        <TfiSearch size={20} className="text-secondary-color" />
        <input type="text" placeholder="Search on Memik" className="outline-none text-sm py-1 bg-transparent w-full" />
    </div>
  )
}

export default memo(SearchBar)