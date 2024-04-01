"use client";
import { useQueryContext } from "@/context/QueryContext";
import {
  checkIsSelected,
  filterSearchQueryField,
  handleSelectUtil,
  setSortQuery,
} from "@/utils/services";
import { useLayoutEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export interface ListType {
  name: string;
  value: string;
}

export interface FilterFieldType {
  list: [ListType];
  isFirst?: boolean;
  title: string;
  isSort?: boolean;
}

const FilterField = ({ list, isFirst, title, isSort }: FilterFieldType) => {
  const { queries, handleSetQueries } = useQueryContext();
  const [selected, setSelected] = useState<ListType | ListType[]>(
    isSort ? list[0] : []
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
          {title} {isSort ? ": " + (selected as ListType)?.name : null}
        </p>
        <div className="flex items-center justify-center gap-4">
          {(selected as ListType[])?.length > 0
            ? (selected as ListType[])?.length
            : null}
          <IoIosArrowDown
            size={18}
            className={`text-secondary-color mr-2 smooth_transition ${
              !isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>
      {!!isOpen && (
        <FilterFieldOptions
          list={list}
          handleClick={handleSelect}
          selected={selected}
          isSort={isSort ? true : false}
          fieldName={title.toLowerCase()}
        />
      )}
    </div>
  );
};

export const FilterFieldOptions = ({
  list,
  handleClick,
  selected,
  isSort,
  fieldName,
}: {
  list: [ListType];
  handleClick: Function;
  selected: ListType | ListType[];
  isSort?: boolean;
  fieldName?: string;
}) => {
  return (
    <div className={`w-full pb-2 overflow-hidden bg-white smooth_transition `}>
      <ul>
        {list.map((li, idx) => (
          <li
            key={idx}
            onClick={() => handleClick({ target: li, field: fieldName })}
            className={`py-1 cursor-pointer px-3 text-sm ${
              (selected as ListType)?.value === li?.value ||
              (!isSort &&
                checkIsSelected({
                  list: selected as [ListType],
                  value: li.value,
                }))
                ? "bg-primary-color text-white"
                : "md:hover:bg-primary-color/40 md:hover:text-white"
            } smooth_transition`}
          >
            {li.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterField;
