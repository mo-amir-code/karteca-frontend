import { IoLocationSharp } from "react-icons/io5";
import PriceAndDiscount from "./PriceAndDiscount";
import Colors from "./Colors";
// import Sizes from "./Sizes";
import { ProductDetailsHeroType } from "@/sections/productDetails/Hero";
import ClaimLabels from "./ClaimLabels";
import Rating from "./Rating";
import CheckDeliveryPincode from "./CheckDeliveryPincode";


const ProductDetails = ({data, totalRating, totalReviews, avgRating}:ProductDetailsHeroType) => {
  return (
    <div className="w-full h-full space-y-2 flex flex-col justify-between">
      <div className="space-y-2">
        {/* title */}
        <h1 className="text-lg font-medium text-secondary-color leading-6">
          {data.title}
        </h1>

        {/* rating */}
        <Rating avgRating={avgRating} totalRatings={totalRating} totalReviews={totalReviews} />

        {/* price */}
        <PriceAndDiscount price={data.price} discount={data.discount} />

        <div className="space-y-4">
          {/* colors */}
          <div className="space-y-1">
            <p className="text-sm font-semibold">Color</p>
            <Colors colors={data.colors} />
          </div>

          {/* sizes */}
          {/* <div className="space-y-1">
            <p className="text-sm font-semibold">Size</p>
            <Sizes/>
          </div> */}
        </div>
      </div>

      <div className="space-y-4">
        {/* Pincode check */}
        <div className="space-y-1 pt-4">
          <div className="flex items-center justify-start font-semibold text-base text-gray-500">
            <IoLocationSharp size={20} />
            <span>Delivery Options</span>
          </div>
          <CheckDeliveryPincode />
        </div>

        {/* Trust Label */}
        <ClaimLabels />
      </div>
    </div>
  );
};

export default ProductDetails;
