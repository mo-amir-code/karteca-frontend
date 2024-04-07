"use client";
import { memo } from "react";
import OrderInfo from "./OrderInfo";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentOrderId } from "@/redux/slices/app/appSlice";
import { useGetOrderDetailsByIdQuery } from "@/redux/queries/order/orderAPI";
import NotFound from "@/components/notfound/NotFound";
import { OrderDetailsType } from "@/redux/queries/order/orderTypes";
import IsLoading from "@/HOC/IsLoading";

const Index = () => {
  const orderId = useAppSelector(selectCurrentOrderId);
  const { data, isLoading, isSuccess, isFetching, isError } =
    useGetOrderDetailsByIdQuery(orderId!);

  return (
    <IsLoading isLoading={isLoading} isSuccess={isSuccess || isFetching} isError={isError} >
      <>
        {data?.data ? (
          <OrderInfo data={data?.data as OrderDetailsType} />
        ) : (
          <NotFound msg="Something went wrong" />
        )}
      </>
    </IsLoading>
  );
};

export default memo(Index);
