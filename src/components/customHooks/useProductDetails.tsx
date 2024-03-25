"use client";
import { useQueryContext } from "@/context/QueryContext";
import { calculateDiscountedPrice, createURL } from "@/utils/services";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useProductDetails = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  const {queries, handleSetQueries} = useQueryContext();
  const currentPrice = calculateDiscountedPrice(price, discount)!;
  const qty = queries.get("quantity");

  useEffect(() => {
    const qty = queries.get("quantity");

    if (price && discount) {
      if (currentPrice && qty) {
        queries.set("currentprice", Math.floor(currentPrice).toString());
        queries.set("discount", discount.toString());
        queries.set("totalamount", Math.floor(parseInt(qty) * currentPrice).toString());
        handleSetQueries();
      }
    }
  }, []);
  
  useEffect(() => {
    if(qty && currentPrice){
      queries.set("totalamount", Math.floor(parseInt(qty) * currentPrice).toString());
      handleSetQueries();
    }
  },[qty]);

  return;
};

export default useProductDetails;
