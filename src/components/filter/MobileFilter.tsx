import Categories from "./Categories";
import { ListType } from "./FilterField";
import FilterWithState from "./FilterWithState";
import { discount, rating, sortList } from "@/data";


const MobileFilter = () => {
  return (
    <div className="p-2 hidden max-md:flex overflow-x-auto hide_scrollbar items-center justify-start gap-2" >
        <FilterWithState  title="Sort By" list={sortList as [ListType]} isSort={true} isFromMobile  />
        <FilterWithState  title="Discount" list={discount as [ListType]} isFromMobile  />
        <Categories isFromMobile  />
        <FilterWithState title="Rating" list={rating as [ListType]} isFromMobile />
    </div>
  )
}

export default MobileFilter