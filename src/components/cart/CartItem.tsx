import Image from "next/image";
import productImage from "@/assets/productsImage/dummy2.png";
import { FaTrash, FaHeart } from "react-icons/fa";
import Specifications from "../productDetails/Specifications";

const CartItem = () => {
  return (
    <div className="w-full">
      <div className="flex border-b border-secondary-color py-4 ">
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
                    <Specifications />
                  </div>
                </div>
              </div>

              {/* Product Cost, Quantity */}
              <div className="flex sm:flex-col max-sm:items-center space-y-4 max-sm:space-x-3">
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-secondary-color text-end max-sm:text-start max-sm:text-sm">
                    Quantity:
                  </h3>
                  <div className="text-secondary-color_3 ">
                    <span className="flex items-center justify-start border-2 border-secondary-color_3 hover:shadow-lg duration-200 transition-all">
                      <button className=" w-10 max-md:w-6 flex items-center justify-center cursor-pointer hover:text-primary-color duration-200 transition-all">
                        -
                      </button>
                      <span className=" w-10 max-md:w-6 max-md:text-sm max-sm:text-xs flex items-center font-semibold justify-center">
                        3
                      </span>
                      <button className=" w-10 max-md:w-6 flex items-center justify-center cursor-pointer hover:text-primary-color duration-200 transition-all">
                        +
                      </button>
                    </span>
                  </div>
                </div>
                <p className="text-base font-medium text-secondary-color text-end max-sm:text-sm">
                  <span>Total:</span><span>431</span>
                </p>
              </div>
            </div>
            <div className="flex px-4 max-md:px-2 items-center justify-start gap-2 flex-wrap">
              <button className="flex items-center justify-center text-sm gap-1 bg-primary-color px-4 p-2 rounded-lg shadow-lg smooth_transition hover:-translate-y-1">
                <FaTrash size={12} />
                <span>Remove</span>
              </button>
              <button className="flex items-center justify-center text-sm gap-1 px-4 p-2">
                <FaHeart className="text-red-color" size={14} />
                <span>Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
