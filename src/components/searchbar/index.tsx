import { TfiSearch } from "react-icons/tfi";

const SearchBar = () => {
  return (
    <div className="flex hover:shadow-md smooth_transition items-center gap-2 justify-start bg-[#F0F5FF] max-sm:max-w-[180px] rounded-md max-sm:py-1 py-2 px-3 flex-grow max-w-[400px] min-w-[200px]" >
        <TfiSearch size={20} className="text-secondary-color" />
        <input type="text" placeholder="Search on Memik" className="outline-none bg-transparent w-full" />
    </div>
  )
}

export default SearchBar