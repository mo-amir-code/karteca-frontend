"use client";
import { useGetProductCategoriesWithImageQuery } from "@/redux/queries/products/productsAPI";
import Category from "./Category";
import { ProductCategoryWithImageType } from "@/redux/queries/products/productsType";
import toast from "react-hot-toast";

const Categories = () => {
  const { data, isError, isSuccess } =
    useGetProductCategoriesWithImageQuery(null);

    if(isError){
      toast.error("Internal Server Error Occurred!");
    }

  return isSuccess ? (
    <div className="sm:flex max-sm:gap-1 grid grid-cols-3 sm:items-center bottom_to_top_ani justify-around p-4 max-sm:py-2 max-sm:px-0 shadow-md bg-white">
      {data?.data?.map((item: ProductCategoryWithImageType, idx: number) => (
        <Category key={idx} name={item.name} image={item.image} />
      ))}
    </div>
  ) : null;
};

export default Categories;
