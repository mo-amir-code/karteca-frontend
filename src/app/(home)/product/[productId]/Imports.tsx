"use client";
import IsLoading from "@/HOC/IsLoading";
import { useGetProductByIdQuery } from "@/redux/queries/products/productsAPI";
import { ProductDetailsType } from "@/redux/queries/products/productsType";
import Hero from "@/sections/productDetails/Hero";
import ProductSpecifications from "@/sections/productDetails/ProductSpecifications";
import { useParams, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import Reviews from "@/components/productDetails/reviews";
import Error from "@/components/error/Error";

const Imports = () => {
  const { productId } = useParams();
  const { data, isLoading, isSuccess, isError } = useGetProductByIdQuery(
    productId.toString()
  );
  const router = useRouter();

  useLayoutEffect(() => {
    if (!productId) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <IsLoading isLoading={isLoading} isSuccess={isSuccess} isError={isError}>
        {data?.data?.product ? (
          <>
            <Hero
              data={data?.data?.product as ProductDetailsType}
              totalRating={data?.data?.totalRating}
              totalReviews={data?.data?.totalReviews}
              avgRating={data?.data.avgRating}
            />
            <ProductSpecifications
              description={data?.data?.product?.description}
              highlights={data?.data?.product?.highlights}
              specs={data?.data?.product?.specifications}
              warranty={data?.data?.product?.warranty}
            />
            <Reviews />
          </>
        ) : (
          <Error />
        )}
      </IsLoading>
    </>
  );
};

export default Imports;
