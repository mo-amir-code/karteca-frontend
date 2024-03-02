import MobileTag from "./MobileTag"
import { discount, filterCategories, rating, sortList } from "@/data";


const MobileFilter = () => {
  return (
    <div className="p-2 overflow-x-auto hide_scrollbar flex items-center justify-start gap-2" >
        <MobileTag title="Sort By" />
        <MobileTag title="Discount" />
        <MobileTag title="Categories" />
        <MobileTag title="Rating" />
    </div>
  )
}

export default MobileFilter