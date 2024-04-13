"use client";
import React, { useState } from "react";
import FilterField, { ListType } from "./FilterField";
import MobileTag from "./MobileTag";

interface FilterWithStateType {
  list: [ListType];
  isFirst?: boolean;
  title: string;
  isSort?: boolean;
  isFromMobile?: boolean;
}

const FilterWithState = ({
  list,
  isFirst,
  title,
  isSort,
  isFromMobile,
}: FilterWithStateType) => {
  const [selected, setSelected] = useState<ListType | ListType[]>([]);

  return (
    <>
      {isFromMobile ? (
        <MobileTag
          selected={selected}
          setSelected={setSelected}
          list={list}
          title={title}
          isSort={isSort}
        />
      ) : (
        <FilterField
          selected={selected}
          setSelected={setSelected}
          list={list}
          isFirst={isFirst}
          title={title}
          isSort={isSort}
        />
      )}
    </>
  );
};

export default FilterWithState;
