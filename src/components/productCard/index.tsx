import Image from "next/image";
import product from "@/assets/productsImage/dummy2.png";
import { shortProductTitle } from "@/utils/services";

const ProductCard = () => {
  return (
    <div className="flex items-center justify-center" >
      <div className="max-w-[216px] max-[460px]:w-[176px] bg-white max-sm:bg-[#F1F2F4] p-2 rounded-xl smooth_transition hover:shadow-md">
        <div className="w-[200px] max-[460px]:w-[160px] rounded-lg overflow-hidden">
          <Image src={product} alt="product image" />
        </div>
        <div className="pt-2 pb-1 flex flex-col items-center justify-center gap-1" >
          <h1 className="text-xs font-poppins font-medium hover:text-primary-color smooth_transition" >{shortProductTitle({title: "Apple Smartwatch With Apple logo"})}</h1>
          <span className="text-xs font-poppins font-semibold" >₹879</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
