"use client";
import { useProductContext } from "@/context/ProductContext";
import { useQueryContext } from "@/context/QueryContext";
import { calculateDiscountedPrice } from "@/utils/services";
import { useEffect } from "react";

const useProductDetails = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  const {queries} = useQueryContext();
  const currentPrice = calculateDiscountedPrice(price, discount)!;
  const qty = queries.get("quantity");
  const {dispatch} = useProductContext();

  useEffect(() => {
    const qty = queries.get("quantity");

    if (price && discount) {
      if (currentPrice && qty) {
        dispatch({type: "currentPrice", payload: Math.floor(currentPrice)});
        dispatch({type: "discount", payload: discount});
        dispatch({type: "totalAmount", payload: Math.floor(parseInt(qty) * currentPrice)});
      }
    }
  }, []);
  
  useEffect(() => {
    if(qty && currentPrice){
      dispatch({type: "totalAmount", payload: Math.floor(parseInt(qty) * currentPrice)});
    }
  },[qty]);

  return;
};

export default useProductDetails;
