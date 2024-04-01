"use client";
import { useRouter } from "next/navigation";
import { memo, useCallback, useState } from "react";
import { TfiSearch } from "react-icons/tfi";

const SearchBar = ({ isOnMobile }: { isOnMobile?: boolean }) => {
  const [query, setQuery] = useState<string | null>(null);
  const router = useRouter();

  const handleSearch = useCallback(() => {
      setQuery(null);  
      router.push(`/search?query=${query}`);
  }, [query]);

  return (
    <div className="flex gap-2">
      <div
        style={isOnMobile ? { maxWidth: "100%" } : {}}
        className={`flex smooth_transition items-center gap-2 justify-start bg-[#F0F5FF] max-sm:max-w-[180px] rounded-md max-sm:py-1 py-2 px-3 flex-grow max-w-[400px] min-w-[200px] ${
          isOnMobile ? "border-[1.5px]" : "hover:shadow-md"
        }`}
      >
        {!(!!query) && <TfiSearch size={20} className="text-secondary-color" />}
        <input
          type="text"
          value={query || ""}
          onKeyDown={(event)=>{
            if(event.key === "Enter" && query) handleSearch()
          }}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search on Memik"
          className="outline-none text-sm py-1 bg-transparent w-full"
        />
      </div>
      {!!query && <button onClick={()=>handleSearch()} className="bg-primary-color px-4 rounded-md">
        <TfiSearch size={20} className="text-white" />
      </button>}
    </div>
  );
};

export default memo(SearchBar);
