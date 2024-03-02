import React from "react";
import FilterField, { ListType } from "./FilterField";
import { sortList } from "@/data";

const Sidebar = () => {
  return (
    <aside className="flex-[0.23] space-y-6 rounded-md select-none">
      <FilterField list={sortList as [ListType]} isFirst={true} />

      <div>
        <FilterField list={sortList as [ListType]} isFirst={true} />
        <FilterField list={sortList as [ListType]} />
        <FilterField list={sortList as [ListType]} />
        <FilterField list={sortList as [ListType]} />
        <FilterField list={sortList as [ListType]} />
        <FilterField list={sortList as [ListType]} />
      </div>
    </aside>
  );
};

export default Sidebar;
