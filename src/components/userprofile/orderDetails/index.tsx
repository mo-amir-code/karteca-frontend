"use client"
import { memo } from "react"
import OrderInfo from "./OrderInfo"
import { useAppSelector } from "@/redux/hooks"
import { selectCurrentOrderId } from "@/redux/slices/app/appSlice"
import { useGetOrderDetailsByIdQuery } from "@/redux/queries/order/orderAPI"
import FullLoader from "@/components/loader/FullLoader"
import NotFound from "@/components/notfound/NotFound"
import { OrderDetailsType } from "@/redux/queries/order/orderTypes"


const Index = () => {
  const orderId = useAppSelector(selectCurrentOrderId);
  const {data, isLoading, isSuccess, isFetching} = useGetOrderDetailsByIdQuery(orderId!);

  if(isLoading || isFetching){
    return <FullLoader />
  }
  
  return (
    <>
    {
      isSuccess? data?.data? <OrderInfo data={data?.data as OrderDetailsType} /> : <NotFound  msg="Something went wrong"/> : <NotFound msg="Something went wrong" />
    }
    </>
  )
}

export default memo(Index)