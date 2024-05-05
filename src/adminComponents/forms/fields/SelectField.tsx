"use client";
import { memo } from "react";

const SelectField = ({
  name,
  categories,
  setCategory,
  refetch,
}: {
  name: string;
  categories: string[];
  setCategory: Function;
  refetch?: Function;
}) => {
  const handleOnChange = (value: string) => {
    setCategory(value);
    if (refetch) refetch();
  };

  return (
    <div className="w-full">
      <div className="w-full text-primary-color cursor-pointer flex-1 text-xl gap-2 border-2 border-secondary-color_3 py-3 px-2 max-md:py-2 max-md:px-1 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start">
        <select
          onChange={(e) => handleOnChange(e.target.value)}
          defaultValue={"Select Category"}
          id=""
          className="text-base max-md:text-sm font-normal  text-secondary-color bg-transparent outline-none group w-full"
        >
          <option value="">---- {name} -----</option>
          {categories?.map((ctry, idx) => (
            <option key={idx} value={ctry}>
              {ctry?.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default memo(SelectField);
