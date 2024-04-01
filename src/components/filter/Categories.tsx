"use client";
import React from "react";
import { ListType } from "./FilterField";
import { useGetProductCategoriesQuery } from "@/redux/queries/products/productsAPI";
import FilterWithState from "./FilterWithState";

const Categories = ({ isFromMobile, isFirst }: { isFromMobile?: boolean, isFirst?: boolean }) => {
  const { data, isSuccess } = useGetProductCategoriesQuery(null);

  if (isFromMobile && isSuccess) {
    return <FilterWithState title="Categories" list={data?.data as [ListType]} isFromMobile />;
  }

  return (
    <>
      <FilterWithState
        title="Categories"
        list={data?.data as [ListType]}
        isFirst={isFirst}
      />
    </>
  );
};

export default Categories;
