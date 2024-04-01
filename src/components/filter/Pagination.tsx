"use client";
import { useQueryContext } from "@/context/QueryContext";
import { useEffect, useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const Pagination = ({page}:{page:number}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { queries, handleSetQueries } = useQueryContext();

  const handlePage = (n: any) => {
    setCurrentPage(n);
    queries.set("page", n);
    handleSetQueries();
  };

  const handleMovePage = (direction:string) => {
    if(direction === "prev" && currentPage > 1){
        setCurrentPage((prev) => prev - 1);
        queries.set("page", currentPage - 1);
        handleSetQueries();
    }
    else if(direction === "next" && currentPage < page){
        setCurrentPage((prev) => prev + 1); 
        queries.set("page", currentPage + 1);
        handleSetQueries();
    }

  }

  useEffect(() => {
    const queryPage = queries.get("page");
    const queryLimit = queries.get("limit");

    if (!queryPage) {
      queries.set("page", 1);
      handleSetQueries();
    }else setCurrentPage(parseInt(queryPage));
    if (!queryLimit) {
      queries.set("limit", 12);
      handleSetQueries();
    }

  }, []);

  return (
    <div className="w-full flex items-center mt-8 justify-center gap-3">
      <span aria-disabled={currentPage === 1} onClick={()=>handleMovePage("prev")} className="w-10 h-10 smooth_transition max-md:border-primary-color md:hover:text-white hover:shadow-lg md:hover:bg-primary-color flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer">
        <CgChevronLeft className="w-4 h-4" />
      </span>
      {Array.from({length: page}, (_, index) => index + 1).map((n) => {
        if (n <= 10) {
          return (
            <span
              key={n}
              onClick={() => handlePage(n)}
              className={`w-10 h-10 ${
                currentPage === n && "bg-primary-color text-white shadow-md"
              } flex hover:shadow-lg items-center text-sm justify-center font-bold border-2 border-secondary-color_3 cursor-pointer smooth_transition`}
            >
              {n}
            </span>
          );
        } else if (n == 11) {
          return (
            <span
              key={n}
              className={`w-10 h-10 flex hover:shadow-lg items-end justify-center font-bold cursor-pointer smooth_transition`}
            >
              ...
            </span>
          );
        }
      })}
      <span aria-disabled={currentPage === page} onClick={()=>handleMovePage("next")} className="w-10 h-10 smooth_transition hover:shadow-lg max-md:border-primary-color md:hover:text-white md:hover:bg-primary-color flex items-center justify-center font-[Teko] font-bold border-2 border-secondary-color_3 cursor-pointer">
        <CgChevronRight className="w-4 h-4" />
      </span>
    </div>
  );
};

export default Pagination;
