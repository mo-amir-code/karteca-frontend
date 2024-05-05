import Image from "next/image";
import Specifications from "../productDetails/Specifications";
import Stars from "../productCard/Stars";
import { CartItemDataType } from "@/redux/queries/cart/cartTypes";
import Quantity from "./Quantity";
import Buttons from "./Buttons";
import { memo } from "react";

const CartItem = ({cartData}:{cartData:CartItemDataType}) => {
  return (
    <div className="w-full bottom_to_top_ani smooth_transition">
      <div className="flex smooth_transition border-b max-sm:hidden border-secondary-color py-4 ">
        <div className="max-w-[250px] max-sm:max-w-[200px] rounded-lg overflow-hidden shadow-lg">
          <Image src={cartData?.product?.thumbnail} priority={false} alt="cart image" width={250} height={200} />
        </div>
        <div className="flex-grow">
          <div className="max-md:space-y-2 flex flex-col max-sm:gap-4 justify-between h-full">
            <div className="w-full text-secondary-color flex justify-between max-sm:flex-col max-sm:gap-4 px-4 max-md:px-2">
              {/* Product details */}
              <div className="flex flex-col justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-lg leading-5 max-sm:leading-5 font-semibold max-sm:text-lg hover:text-primary-color smooth_transition">
                    {cartData.product.title}
                  </h2>
                  <div>
                    <Specifications specs={cartData.product.specifications} />
                    <span className="font-medium text-xs" >Price: ₹{cartData.currentPrice}</span>
                  </div>
                </div>
              </div>

              {/* Product Cost, Quantity */}
              <div className="my-10 flex sm:flex-col max-sm:items-center space-y-4 max-sm:space-x-3">
                <Quantity quantity={cartData.quantity} cartId={cartData._id} />
                <p className="text-base font-medium text-secondary-color text-end max-sm:text-sm">
                  <span>Total:</span>
                  <span>₹{cartData.currentPrice * cartData.quantity}</span>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex px-4 max-md:px-2 items-center justify-start gap-2 flex-wrap">
              <Buttons productId={cartData.product._id} cartId={cartData._id} />
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileCartItm = ({cartData}:{cartData:CartItemDataType}) => {
  return (
    <div className="flex gap-2 bottom_to_top_ani border-b sm:hidden border-secondary-color py-4">
      <div className="w-[80px] rounded-lg overflow-hidden space-y-1">
        <Image src={cartData.product.thumbnail} placeholder="blur" blurDataURL={cartData.product.thumbnail} priority={false} alt="product" width={80} height={100} />
        <div className="border rounded-b-lg px-2">
          <Quantity isOnMobile quantity={cartData.quantity} cartId={cartData._id} />
          {/* <select className="text-sm outline-none w-full text-center bg-transparent">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select> */}
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-medium">{cartData.product.title}</h2>
          <Stars stars={3.5} reviews={23} />
          <div className="flex items-end flex-row-reverse justify-end gap-2">
            <span className="text-lg font-medium text-secondary-color">
              ₹{cartData.currentPrice * cartData.quantity}
            </span>
            {cartData.currentPrice < cartData.product.price && <span className="text-sm mb-1 line-through text-gray-400 font-medium">
              ₹{cartData.product.price * cartData.quantity}
            </span>}
            <span className="text-sm mb-1 text-green-color font-semibold">
              {cartData.discount}% off
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          {/* <button className="w-full text-text-color rounded-sm flex items-center justify-center text-xs gap-1 bg-primary-color p-1">
            <FaTrash size={12} />
            <span>Remove</span>
          </button>
          <button className="w-full flex items-center justify-center text-sm gap-1 px-4 p-2">
            <FaHeart className="text-red-color" size={14} />
            <span>Wishlist</span>
          </button> */}
          <Buttons productId={cartData._id} isOnMobile cartId={cartData._id} />
        </div>
      </div>
    </div>
  );
};

export const MobileCartItem = memo(MobileCartItm);

export default memo(CartItem);
