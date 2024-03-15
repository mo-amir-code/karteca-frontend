"use client";
import { sizes } from "@/data";
import { useState } from "react";

export const Colors = ({ colors }: { colors: string[] }) => {
  const [selectedColor, setSelectedColor] = useState<number>(0);

  return (
    <div className="flex items-center justify-start gap-2">
      {colors.map((color, idx) => (
        <span
          onClick={() => setSelectedColor(idx)}
          key={idx}
          style={{ backgroundColor: color }}
          className={`w-6 h-6 rounded-md smooth_transition ${
            selectedColor === idx
              ? "shadow-md scale-110 border-primary-color"
              : "hover:shadow-md"
          } border-2 border-transparent`}
        />
      ))}
    </div>
  );
};

export const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState<number>(sizes[0].size);

  return (
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
  );
};

export const CheckDelivery = () => {
  return (
    <div className="flex items-center justify-center max-w-[250px] border p-2 gap-2 max-md:gap-1">
      <input
        disabled // It will be enable
        type="number"
        className="w-full outline-none bg-transparent text-sm font-medium"
        placeholder="Enter Delivery Pincode"
      />
      <button
        disabled // It will be enable
        style={{ width: "max-content" }}
        className="outline-none font-semibold text-primary-color font-lato text-sm"
      >
        Check
      </button>
    </div>
  );
};
