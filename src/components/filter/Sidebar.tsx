import React from "react";
import FilterField, { ListType } from "./FilterField";
import { discount, filterCategories, rating, sortList } from "@/data";
import Price from "./Price";
import Tags from "./Tags";

const Sidebar = () => {
  return (
    <aside className="flex-[0.23] space-y-6 rounded-md select-none">
      <Tags title="Filters" />
      <FilterField title="Sort By" list={sortList as [ListType]} isFirst={true} isSort={true} />

      <div>
        <FilterField title="Categories" list={filterCategories as [ListType]} isFirst={true} />
        <FilterField title="Discount" list={discount as [ListType]} />
        <Price />
        <FilterField title="Customer Ratings" list={rating as [ListType]}/>
      </div>
    </aside>
  );
};

export default Sidebar;
