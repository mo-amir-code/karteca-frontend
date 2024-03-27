"use client";
import { ProductActionTypes, useProductContext } from "@/context/ProductContext";
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
        dispatch({type: ProductActionTypes.UpdateCurrentPrice, payload: Math.floor(currentPrice)});
        dispatch({type: ProductActionTypes.UpdateDiscount, payload: discount});
        dispatch({type: ProductActionTypes.UpdateTotalAmount, payload: Math.floor(quantity * currentPrice)});
      }
    }
  }, []);
  
  useEffect(() => {
    if(currentPrice){
      dispatch({type: ProductActionTypes.UpdateTotalAmount, payload: Math.floor(quantity * currentPrice)});
    }
  },[quantity]);

  return;
};

export default useProductDetails;
