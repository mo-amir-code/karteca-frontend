"use client";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FilterFieldOptions, ListType } from "./FilterField";
import { filterSearchQueryField, handleSelectUtil } from "@/utils/services";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSearchTag, setSearchTag } from "@/redux/slices/app/appSlice";
import { useQueryContext } from "@/context/QueryContext";

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
  const selectedSearchTag = useAppSelector(selectSearchTag);
  const dispatch = useAppDispatch();
  const {queries, handleSetQueries} = useQueryContext();

  const handleSelect = ({
    target,
    field,
  }: {
    target: ListType;
    field: string;
  }) => {
    let newField: string = filterSearchQueryField(field);

    if (newField === "sort") {
      queries.set(newField, target.value);
    } else {
      const oldQuery = queries.getAll(newField);
      if (oldQuery[0]) {
        const queryStringArr = oldQuery[0].toString().split(",");
        const isExists = queryStringArr.find(
          (qry: string) => qry === target.value
        );
        if (isExists) {
          const filteredQuery = queryStringArr.filter(
            (qry: string) => qry !== target.value
          );
          queries.set(newField, filteredQuery);
        } else queries.set(newField, [...queryStringArr, target.value]);
      } else queries.set(newField, target.value);
    }
    handleSetQueries();

    handleSelectUtil({
      isSort: isSort ? true : false,
      setSelected,
      selected,
      target,
    });
  };

  const handleTagToggle = () => {
    setIsOpen((prev) => !prev);
    dispatch(setSearchTag(title.toLowerCase()));
  }

  useEffect(() => {
    if(selectedSearchTag && selectedSearchTag === title.toLowerCase()){
      setIsOpen(true);
    }else{
      setIsOpen(false);
    }
  }, [selectedSearchTag]);
  

  return (
    <>
    <div
      onClick={() => handleTagToggle()}
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
          handleClick={handleSelect}
          selected={selected}
          isSort={isSort ? true : false}
          fieldName={title.toLowerCase()}
        />
      </div>
    </>
  );
};

export default MobileTag;
