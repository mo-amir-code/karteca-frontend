"use client"
import { GetOrderType } from "@/redux/queries/order/orderTypes";
import OrderInfo from "./OrderInfo";
import { useAppDispatch } from "@/redux/hooks";
import { useCallback } from "react";
import { setProfile } from "@/redux/slices/app/appSlice";


const Order = ({isFirst, data}:{isFirst?:boolean, data:GetOrderType}) => {
  const dispatch = useAppDispatch();


  const handleOrderSet = useCallback(() => {
    dispatch(setProfile({profile: "orderDetails"}));
  }, [dispatch, data._id]);


  return (
    <div onClick={()=> handleOrderSet()} >
      <OrderInfo isFirst={isFirst} data={data} />
    </div>
  )
}

export default Order