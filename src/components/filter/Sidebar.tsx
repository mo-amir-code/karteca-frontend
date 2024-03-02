import React from "react";
import FilterField, { ListType } from "./FilterField";
import { discount, sortList } from "@/data";
import Price from "./Price";

const Sidebar = () => {
  return (
    <aside className="flex-[0.23] space-y-6 rounded-md select-none">
      <FilterField title="Sort By" list={sortList as [ListType]} isFirst={true} isSort={true} />

      <div>
        <FilterField title="Discount" list={discount as [ListType]} isFirst={true} />
        <Price />
      </div>
    </aside>
  );
};

export default Sidebar;
