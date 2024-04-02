import { memo } from "react";
import Order from "./Order";
import { useGetOrderQuery } from "@/redux/queries/order/orderAPI";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import FullLoader from "@/components/loader/FullLoader";
import { GetOrderType } from "@/redux/queries/order/orderTypes";
import Empty from "@/components/notfound/Empty";

const Index = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const {data, isLoading, isFetching, isSuccess} = useGetOrderQuery(loggedInUserId!);

  if(isLoading || isFetching){
    return <FullLoader />
  }

  return (
    <div className="space-y-8">
      <h2 className="text-secondary-color font-medium">My Orders</h2>
      <div>
        {
          !!isSuccess && data.data.length>0? data?.data?.map((order:GetOrderType, idx:number) => {
            if(idx === 0) return <Order isFirst data={order} />
            else return <Order data={order} />
          })
          : 
          <Empty msg="There is nothing" />
        }
      </div>
    </div>
  );
};

export default memo(Index);
