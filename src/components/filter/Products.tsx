import React from "react";
import ProductCard from "../productCard";

const Products = () => {
  return (
    <div className="w-full grid grid-cols-4 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-md:grid-cols-3 max-[680px]:grid-cols-2 gap-2">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
