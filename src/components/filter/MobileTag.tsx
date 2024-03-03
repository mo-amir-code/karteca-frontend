"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FilterFieldOptions, ListType } from "./FilterField";
import { handleSelectUtil } from "@/utils/services";

const MobileTag = ({
  title,
  list,
  isSort,
}: {
  title: string;
  list: [ListType];
  isSort?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<ListType | ListType[]>(
    isSort ? list[0] : []
  );

  const handleSelect = ({target}:{target:ListType}) => {
    handleSelectUtil({
      isSort: isSort ? true : false,
      setSelected,
      selected,
      target,
    });
  };

  return (
    <>
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      style={{ maxWidth: "max-content" }}
      className="flex font-lato items-center gap-1 justify-between font-medium pr-1 pl-3 py-2 rounded-full text-xs border-[1.5px]"
    >
      <span className="whitespace-nowrap">{title}</span>
      <IoIosArrowDown
        size={16}
        className={`text-secondary-color mr-2 smooth_transition ${
          !isOpen ? "rotate-0" : "rotate-180"
        }`}
      />
    </div>
    <div
        className={`fixed bottom-0 left-0 w-full py-4 ${
          isOpen ? "translate-y-0" : "translate-y-[100%] hidden"
        } smooth_transition bg-white z-10`}
      >
        <FilterFieldOptions
          list={list}
          handleSelect={handleSelect}
          selected={selected}
          isSort={isSort ? true : false}
        />
      </div>
    </>
  );
};

export default MobileTag;
