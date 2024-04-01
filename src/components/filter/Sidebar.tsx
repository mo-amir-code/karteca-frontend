import React from "react";
import { ListType } from "./FilterField";
import { discount, rating, sortList } from "@/data";
import Price from "./Price";
// import Tags from "./tags";
import Categories from "./Categories";
import FilterWithState from "./FilterWithState";

const Sidebar = () => {
  return (
    <aside className="min-w-[276px] max-w-[276px] max-md:hidden space-y-6 rounded-md select-none">
      {/* <Tags title="Filters" /> */}
      <FilterWithState title="Sort By" list={sortList as [ListType]} isFirst={true} isSort={true} />

      <div>
        <Categories isFirst />
        <FilterWithState title="Discount" list={discount as [ListType]} />
        <Price />
        <FilterWithState title="Customer Ratings" list={rating as [ListType]} />
      </div>
    </aside>
  );
};

export default Sidebar;
