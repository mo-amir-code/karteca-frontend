import React from "react";
import ProductCard from "../productCard";

const Products = () => {
  return (
    <div className="w-full grid grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
