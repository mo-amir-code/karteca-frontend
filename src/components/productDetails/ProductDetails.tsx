import { claims, colors, sizes } from "@/data";
import RatingCard from "./RatingCard";
import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiReturnArrow } from "react-icons/gi";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<number>(sizes[0].size);

  return (
    <div className="w-full h-full space-y-2 flex flex-col justify-between">

      <div className="space-y-2" >
        {/* title */}
        <h1 className="text-lg font-medium text-secondary-color leading-6">
          Firebolt Smartwatch 13"inch Lcd Panel With Amoled Display
        </h1>

        {/* rating */}
        <Rating avgRating={3.5} totalRatings={4356} totalReviews={638} />

        {/* reviews */}
        <div className="flex items-end justify-start py-2 gap-2">
          <span className="text-2xl font-medium text-secondary-color">
            ₹4,999
          </span>
          <span className="text-sm mb-1 line-through text-gray-400 font-medium">
            ₹6,999
          </span>
          <span className="text-sm mb-1 text-green-color font-semibold">
            20% off
          </span>
        </div>

        <div className="space-y-4">
          {/* colors */}
          <div className="space-y-1">
            <p className="text-sm font-semibold">Color</p>
            <div className="flex items-center justify-start gap-2">
              {colors.map((color, idx) => (
                <span
                  onClick={() => setSelectedColor(idx)}
                  key={idx}
                  style={{ backgroundColor: color.color }}
                  className={`w-6 h-6 rounded-md smooth_transition ${
                    selectedColor === idx
                      ? "shadow-md scale-110 border-primary-color"
                      : "hover:shadow-md"
                  } border-2 border-transparent`}
                />
              ))}
            </div>
          </div>

          {/* sizes */}
          <div className="space-y-1">
            <p className="text-sm font-semibold">Size</p>
            <div className="flex items-center justify-start gap-2">
              {sizes.map((size, idx) => (
                <span
                  onClick={() => setSelectedSize(size.size)}
                  key={idx}
                  className={`w-10 py-1 rounded-md smooth_transition ${
                    selectedSize === size.size
                      ? "shadow-md border-primary-color"
                      : "hover:shadow-md border-transparent"
                  } border text-center `}
                >
                  {size.size}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      <div className="space-y-4" >
         {/* Pincode check */}
         <div className="space-y-1 pt-4">
            <div className="flex items-center justify-start font-semibold text-base text-gray-500">
              <IoLocationSharp size={20} />
              <span>Delivery Options</span>
            </div>
            <div className="flex items-center justify-center max-w-[250px] border p-2 gap-2">
              <input
                type="number"
                className="flex-grow outline-none bg-transparent text-sm font-medium"
                placeholder="Enter Delivery Pincode"
              />
              <button className="outline-none font-semibold text-primary-color font-lato text-sm">
                Check
              </button>
            </div>
          </div>

          {/* Trust Label */}
          <div className="flex max-md:hidden items-center justify-between p-3 bg-tertiary-color" >
            {
                claims.map((claim, idx) => (
                    <div className="flex items-center justify-center gap-2 text-sm max-lg:text-xs font-medium" >
                        {
                            (()=>{
                                switch(claim.icon){
                                    case "genuine":
                                        return <VscWorkspaceTrusted size={16}/>
                                    case "return":
                                        return <GiReturnArrow size={16}/>
                                    case "sold":
                                        return <span>Sold By: </span>
                                    default:
                                        return;
                                }
                            })()
                        }
                        <span >{claim.msg}</span>
                    </div>
                ))
            }
          </div>
      </div>
    </div>
  );
};

const Rating = ({
  avgRating,
  totalRatings,
  totalReviews,
}: {
  avgRating: number;
  totalRatings: number;
  totalReviews: number;
}) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <RatingCard avgRating={avgRating} />
      <p className="text-sm font-medium text-gray-500 mb-[2px]">
        {totalRatings} Rating & {totalReviews} Reviews
      </p>
    </div>
  );
};

export default ProductDetails;
