import { calculateDiscountedPrice } from "@/utils/services";
import useProductDetails from "../customHooks/useProductDetails";

const PriceAndDiscount = ({price, discount}:{price:number, discount:number}) => {
  useProductDetails({price, discount});
  
  return (
    <div className="flex items-end justify-start py-2 gap-2">
      <span className="text-2xl font-medium text-secondary-color">₹{Math.floor(calculateDiscountedPrice(price, discount)!)}</span>
      <span className="text-sm mb-1 line-through text-gray-400 font-medium">
        ₹{price}
      </span>
      <span className="text-sm mb-1 text-green-color font-semibold">
        {discount}% off
      </span>
    </div>
  );
};


export default PriceAndDiscount