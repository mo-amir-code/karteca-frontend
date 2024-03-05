"use client";
import Images from "./Images";
import ProductButton from "../buttons/ProductButton";
import ProductDetails from "./ProductDetails";

const Hero = () => {

  return (
    <div className="flex bg-white max-[900px]:flex-col box-border p-3 gap-4">
      <div className="w-[700px] max-[900px]:w-full rounded-lg space-y-2 box-border">
        <Images />
        <ProductActionButton />
      </div>
      <div className="flex-grow w-full">
        <ProductDetails />
      </div>
    </div>
  );
};

const ProductActionButton = () => {

  const handleBuyNow = () => {};

  return (
    <div className="flex items-center gap-1">
      <ProductButton text="ADD TO CART" icon="cart" btnAction={handleBuyNow} />
      <ProductButton text="BUY NOW" icon="buy" btnAction={handleBuyNow} />
    </div>
  );
};

export default Hero;
