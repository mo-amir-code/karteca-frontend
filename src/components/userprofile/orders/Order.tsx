import orderImg from "@/assets/productsImage/dummy2.png"
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md";


const Order = ({isFirst}:{isFirst?:boolean}) => {
  return (
    <div className={`flex items-center py-4 gap-4 border-b ${isFirst && "border-t"} relative smooth_transition hover:bg-tertiary-color px-2`} >
        <div className="w-[60px]" >
            <Image src={orderImg} alt="order" />
        </div>
        <div>
            <span className="text-secondary-color" >Delivery on Jan 16</span>
            <p className="text-sm text-gray-500" >Ultra Smartwatch with ulimited battery</p>
        </div>
        <MdKeyboardArrowRight size={20} className="absolute top-1/2 -translate-y-1/2 right-6" />
    </div>
  )
}

export default Order