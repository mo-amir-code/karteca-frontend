"use client";
import { useProductContext } from "@/context/ProductContext";
import { calculateDiscountedPrice } from "@/utils/services";
import { useEffect } from "react";

const useProductDetails = ({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) => {
  const currentPrice = calculateDiscountedPrice(price, discount)!;
  const {dispatch, quantity} = useProductContext();

  useEffect(() => {

    if (price && discount) {
      if (currentPrice) {
        dispatch({type: "currentPrice", payload: Math.floor(currentPrice)});
        dispatch({type: "discount", payload: discount});
        dispatch({type: "totalAmount", payload: Math.floor(quantity * currentPrice)});
      }
    }
  }, []);
  
  useEffect(() => {
    if(currentPrice){
      dispatch({type: "totalAmount", payload: Math.floor(quantity * currentPrice)});
    }
  },[quantity]);

  return;
};

export default useProductDetails;
