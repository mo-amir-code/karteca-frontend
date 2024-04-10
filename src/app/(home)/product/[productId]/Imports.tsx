"use client";
import IsLoading from "@/HOC/IsLoading";
import { useGetProductByIdQuery } from "@/redux/queries/products/productsAPI";
import { ProductDetailsType } from "@/redux/queries/products/productsType";
import Hero from "@/sections/productDetails/Hero";
import ProductSpecifications from "@/sections/productDetails/ProductSpecifications";
import { useParams } from "next/navigation";

const Imports = () => {
  const { productId } = useParams();
  const { data, isLoading, isSuccess, isError } = useGetProductByIdQuery(
    productId.toString() || "123465456"
  );


  return (
    <>
      <IsLoading isLoading={isLoading} isSuccess={isSuccess} isError={isError}>
        <>
          <Hero data={data?.data?.product as ProductDetailsType} totalRating={data?.data.totalRating} totalReviews={data?.data.totalReviews} avgRating={data?.data.avgRating} />
          <ProductSpecifications description={data?.data.product.description} highlights={data?.data.product.highlights} specs={data?.data.product.specifications} warranty={data?.data.product.warranty} />
        </>
      </IsLoading>
    </>
  );
};

export default Imports;
