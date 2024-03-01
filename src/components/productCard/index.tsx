import Image from "next/image";
import product from "@/assets/productsImage/dummy2.png";
import { shortProductTitle } from "@/utils/services";
import Stars from "./Stars";
import Actions from "./Actions";

const ProductCard = () => {
  

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[216px] max-[460px]:w-[176px] bg-white max-sm:bg-[#F1F2F4] p-2 rounded-xl smooth_transition hover:shadow-md">

        {/* Media Area */}
        <div className="w-[200px] max-[460px]:w-[160px] group rounded-lg overflow-hidden relative">
          <Image src={product} alt="product image" />
          <Actions />
        </div>

        {/* Content Area */}
        <div className="pt-2 pb-1 flex flex-col items-center justify-center gap-1">
          <h1 className="text-xs font-poppins font-medium hover:text-primary-color smooth_transition">
            {shortProductTitle({ title: "Apple Smartwatch With Apple logo" })}
          </h1>
          <div className="flex items-center justify-center gap-1">
            <div className="flex items-center justify-center gap-1">
              <span className="text-xs font-poppins font-semibold">₹879</span>
              <span className="text-xs font-poppins font-semibold line-through text-red-color">
                ₹964
              </span>
            </div>
            <span className="text-xs font-poppins font-medium text-green-color pl-1 border-l">
              12% Off
            </span>
          </div>
          <Stars stars={4.5} reviews={34} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
