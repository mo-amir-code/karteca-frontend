import { ListType } from "./FilterField";
import MobileTag from "./MobileTag"
import { discount, filterCategories, rating, sortList } from "@/data";


const MobileFilter = () => {
  return (
    <div className="p-2 overflow-x-auto hide_scrollbar flex items-center justify-start gap-2" >
        <MobileTag title="Sort By" list={sortList as [ListType]} isSort={true} />
        <MobileTag title="Discount" list={discount as [ListType]} />
        <MobileTag title="Categories" list={filterCategories as [ListType]} />
        <MobileTag title="Rating" list={rating as [ListType]} />
    </div>
  )
}

export default MobileFilter