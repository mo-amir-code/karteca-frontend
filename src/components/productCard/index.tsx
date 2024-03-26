import Image from "next/image";
import { calculateDiscountedPrice, shortProductTitle } from "@/utils/services";
import Stars from "./Stars";
import Actions from "./Actions";
import Link from "next/link";

const ProductCard = ({data}:{data?:ProductCardType}) => {
  return (
    <Link href={`/product/${data?._id || 435}`}>
      <div className="flex items-center justify-center select-none">
        <div className="max-w-[216px] max-[460px]:w-[176px] bg-white max-sm:bg-[#F1F2F4] p-2 rounded-xl smooth_transition hover:shadow-md">
          {/* Media Area */}
          <div className="w-[200px] max-[460px]:w-[160px] group rounded-lg overflow-hidden relative">
            <Image src={data?.thumbnail || ""} alt="product image" width={216} height={260} />
            <Actions productId={data?._id!} />
          </div>

          {/* Content Area */}
          <div className="pt-2 pb-1 flex flex-col items-center justify-center gap-1">
            <h1 className="text-xs font-poppins font-medium hover:text-primary-color smooth_transition">
              {shortProductTitle({ title: data?.title || "Test" })}
            </h1>
            <div className="flex items-center justify-center gap-1">
              <div className="flex items-center justify-center gap-1">
                <span className="text-xs font-poppins font-semibold">₹{calculateDiscountedPrice(data?.price, data?.discount)}</span>
                <span className="text-xs font-poppins font-semibold line-through text-red-color">
                  ₹{data?.price}
                </span>
              </div>
              <span className="text-xs font-poppins font-medium text-green-color pl-1 border-l">
                {data?.discount || 12}% Off
              </span>
            </div>
            <Stars stars={data?.ratingAndReviews?.avgRating || 0} reviews={data?.ratingAndReviews?.avgRating || 0} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
