import Categories from "./Categories";
import { ListType } from "./FilterField";
import MobileTag from "./MobileTag"
import { discount, rating, sortList } from "@/data";


const MobileFilter = () => {
  return (
    <div className="p-2 hidden max-md:flex overflow-x-auto hide_scrollbar items-center justify-start gap-2" >
        <MobileTag title="Sort By" list={sortList as [ListType]} isSort={true} />
        <MobileTag title="Discount" list={discount as [ListType]} />
        <Categories isFromMobile  />
        <MobileTag title="Rating" list={rating as [ListType]} />
    </div>
  )
}

export default MobileFilter