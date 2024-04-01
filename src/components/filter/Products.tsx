"use client";
import React, { useLayoutEffect, useState } from "react";
import ProductCard from "../productCard";
import { useGetFilterProductsQuery } from "@/redux/queries/products/productsAPI";
import { useSearchParams } from "next/navigation";
import FullLoader from "../loader/FullLoader";
import Empty from "../notfound/Empty";
import Pagination from "./Pagination";

const Products = () => {
  const [query, setQuery] = useState<string>("");
  const seachQueries = useSearchParams();
  const { data, isLoading, isSuccess, isFetching, refetch } =
    useGetFilterProductsQuery(query);

  useLayoutEffect(() => {
    setQuery(seachQueries.toString());

    const catchTimout = setTimeout(() => {
      refetch();
    }, 0);

    return () => {
      clearTimeout(catchTimout);
    };
  }, [seachQueries]);

  if (isLoading || isFetching) {
    return <div className="h-screen w-full" ><FullLoader /></div>;
  }

  return (
    <>
      {isSuccess && data?.data?.products?.length ? (
        <>
          <div className="flex items-center justify-between pb-2 px-1 max-md:hidden">
            <p className="text-xl text-secondary-color font-semibold font-poppins">
              Products {data?.data?.products?.length}
            </p>
          </div>
          <div className="w-full grid grid-cols-4 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-md:grid-cols-3 max-[680px]:grid-cols-2 gap-2">
            {data?.data?.products?.map((product: ProductCardType) => (
              <ProductCard key={product._id} data={product} />
            ))}
          </div>
          <Pagination page={data.data.totalPage} />
        </>
      ) : (
        <Empty msg="Search Something Else" isFromSearch />
      )}
    </>
  );
};

export default Products;