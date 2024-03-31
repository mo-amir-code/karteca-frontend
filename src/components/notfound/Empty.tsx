import React from "react";
import Image from "next/image";
import emptyIcon from "@/assets/404/empty_items.svg"
import Link from "next/link";

const Empty = ({msg = "Something is missing here", isFromSearch}:{msg?:string, isFromSearch?: boolean}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={emptyIcon}
        alt="Not found"
        className="w-[400px] max-md:w-[300px] max-sm:w-[200px]"
      />
      <span className="max-md:text-sm font-semibold">{msg}</span>
      {!isFromSearch && <Link
        href={"/"}
        className="px-4 py-[6px] rounded-md bg-primary-color text-white text-sm md:hover:shadow-lg smooth_transition font-semibold mt-2"
      >
        Shop Now
      </Link>}
    </div>
  );
};

export default Empty;
