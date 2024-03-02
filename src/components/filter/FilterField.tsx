"use client";
import { checkIsSelected, handleSelectUtil } from "@/utils/services";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export interface ListType {
  name: string;
  value: string;
}

export interface FilterFieldType{
  list: [ListType];
  isFirst?: boolean;
  title: string;
  isSort?: boolean
}

const FilterField = ({
  list,
  isFirst,
  title,
  isSort,
}: FilterFieldType) => {
  const [selected, setSelected] = useState<ListType | ListType[]>(
    isSort ? list[0] : []
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = ({ target }: { target: ListType }) => {
    handleSelectUtil({isSort:isSort?true:false, setSelected, selected, target});
  };

  return (
    <div
      className={`font-lato bg-white ${
        !!isFirst ? "rounded-tr-md rounded-tl-md" : "border-t"
      }`}
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex p-3 items-center justify-between cursor-pointer"
      >
        <p className="font-semibold font-lato text-secondary-color">
          {title} {isSort ? ": " + (selected as ListType).name : null}
        </p>
        <div className="flex items-center justify-center gap-4">
          {(selected as ListType[]).length > 0
            ? (selected as ListType[]).length
            : null}
          <IoIosArrowDown
            size={18}
            className={`text-secondary-color mr-2 smooth_transition ${
              !isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>
      {!!isOpen && <FilterFieldOptions list={list} handleSelect={handleSelect} selected={selected} isSort={isSort?true:false} />}
    </div>
  );
};

export const FilterFieldOptions = ({list, handleSelect, selected, isSort}:{list:[ListType], handleSelect:Function, selected:ListType | ListType[], isSort?:boolean }) => {
  

  return (
    <div
          className={`w-full pb-2 overflow-hidden bg-white smooth_transition `}
        >
          <ul>
            {list.map((li, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect({ target: li })}
                className={`py-1 cursor-pointer px-3 text-sm ${
                  (selected as ListType).value === li.value ||
                  (!isSort &&
                    checkIsSelected({
                      list: selected as [ListType],
                      value: li.value,
                    }))
                    ? "bg-primary-color"
                    : "hover:bg-primary-color/40"
                } smooth_transition`}
              >
                {li.name}
              </li>
            ))}
          </ul>
        </div>
  )
}

export default FilterField;
