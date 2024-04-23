"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FilterFieldOptions, ListType } from "./FilterField";
import { filterSearchQueryField, handleSelectUtil, setSortQuery } from "@/utils/services";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSearchTag, setSearchTag } from "@/redux/slices/app/appSlice";
import { useQueryContext } from "@/context/QueryContext";
import CommonButton from "../buttons/CommonButton";
import MobileFilterButton from "../buttons/MobileFilterButton";

export interface MobileTagType{
  title: string;
  list: [ListType];
  isSort?: boolean;
  selected: ListType | ListType[],
  setSelected: Function
}

const MobileTag = ({
  title,
  list,
  isSort,
  selected,
  setSelected
}: MobileTagType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  useLayoutEffect(() => {
    const newField: string = filterSearchQueryField(title.toLowerCase());
    const query = queries.get(newField);
    let target: ListType | ListType[];
    if (newField === "sort") {
      target = {
        name: setSortQuery(query || "newest"),
        value: query || "newest",
      };

      if(!query) {
        queries.set("sort", "newest");
        handleSetQueries();
      }
    } else {
      target = !!query?.length && query?.split(",").map((qry: string) => {
        return {
          name: setSortQuery(qry),
          value: qry,
        };
      }) || [];
    }
    setSelected(target);
  }, [queries]);
  

  return (
    <>
    <div
      onClick={() => handleTagToggle()}
      style={{ maxWidth: "max-content" }}
      className={`flex font-lato items-center gap-1 justify-between ${isOpen? "border-2 border-primary-color" : null} font-medium pr-1 pl-3 py-2 rounded-full text-xs border-[1.5px]`}
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
        } smooth_transition bg-white z-10 space-y-3 border border-t`}
      >
        <div className="max-h-[30vh] overflow-auto" >
        <FilterFieldOptions
          list={list}
          handleClick={handleSelect}
          selected={selected}
          isSort={isSort ? true : false}
          fieldName={title.toLowerCase()}
          />
          </div>
        <div className="flex items-center justify-center px-3 gap-2" >
          <MobileFilterButton name="Cancel" type="danger" handle={handleTagToggle} />
          <MobileFilterButton name="Done" type="success" handle={handleTagToggle} />
        </div>
      </div>
    </>
  );
};

export default MobileTag;
