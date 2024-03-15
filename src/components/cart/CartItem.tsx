import Image from "next/image";
import productImage from "@/assets/productsImage/dummy2.png";
import { FaTrash, FaHeart } from "react-icons/fa";
import Specifications from "../productDetails/Specifications";
import Stars from "../productCard/Stars";

const CartItem = () => {
  return (
    <div className="w-full">
      <div className="flex border-b max-sm:hidden border-secondary-color py-4 ">
        <div className="max-w-[250px] max-sm:max-w-[200px] rounded-lg overflow-hidden shadow-lg">
          <Image src={productImage} alt="cart image" />
        </div>
        <div className="flex-grow">
          <div className="max-md:space-y-2 flex flex-col max-sm:gap-4 justify-between h-full">
            <div className="w-full text-secondary-color flex justify-between max-sm:flex-col max-sm:gap-4 px-4 max-md:px-2">
              {/* Product details */}
              <div className="flex flex-col justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-lg leading-5 max-sm:leading-5 font-semibold max-sm:text-lg hover:text-primary-color smooth_transition">
                    Ultra Smartwatch First Copy, Original Okat se bahar
                  </h2>
                  <div>
                    <Specifications specs={{type:"testing"}} />
                  </div>
                </div>
              </div>

              {/* Product Cost, Quantity */}
              <div className="my-10 flex sm:flex-col max-sm:items-center space-y-4 max-sm:space-x-3">
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-secondary-color text-end max-sm:text-start max-sm:text-sm">
                    Quantity:
                  </h3>
                  <div className="border rounded-b-lg px-2">
                    <select className="text-sm outline-none w-full text-center bg-transparent">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                </div>
                <p className="text-base font-medium text-secondary-color text-end max-sm:text-sm">
                  <span>Total:</span>
                  <span>431</span>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex px-4 max-md:px-2 items-center justify-start gap-2 flex-wrap">
              <button className="flex items-center justify-center text-sm gap-1 text-text-color bg-primary-color px-4 p-2 rounded-lg shadow-lg smooth_transition hover:-translate-y-1">
                <FaTrash size={12} />
                <span>Remove</span>
              </button>
              <button className="flex items-center justify-center text-sm gap-1 px-4 p-2">
                <FaHeart className="text-red-color" size={14} />
                <span>Wishlist</span>
              </button>
            </div>
            {/* End Buttons */}
          </div>
        </div>
      </div>
      <MobileCartItem />
    </div>
  );
};

const MobileCartItem = () => {
  return (
    <div className="flex gap-2 border-b sm:hidden border-secondary-color py-4">
      <div className="w-[80px] rounded-lg overflow-hidden space-y-1">
        <Image src={productImage} alt="product" />
        <div className="border rounded-b-lg px-2">
          <select className="text-sm outline-none w-full text-center bg-transparent">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-medium">Ultra Smartwatch First Copy</h2>
          <Stars stars={3.5} reviews={23} />
          <div className="flex items-end flex-row-reverse justify-end gap-2">
            <span className="text-lg font-medium text-secondary-color">
              ₹4,999
            </span>
            <span className="text-sm mb-1 line-through text-gray-400 font-medium">
              ₹6,999
            </span>
            <span className="text-sm mb-1 text-green-color font-semibold">
              20% off
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <button className="w-full text-text-color rounded-sm flex items-center justify-center text-xs gap-1 bg-primary-color p-1">
            <FaTrash size={12} />
            <span>Remove</span>
          </button>
          <button className="w-full flex items-center justify-center text-sm gap-1 px-4 p-2">
            <FaHeart className="text-red-color" size={14} />
            <span>Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
