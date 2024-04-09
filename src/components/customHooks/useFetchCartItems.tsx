import { useUserContext } from "@/context/UserContext";
import { useAppSelector } from "@/redux/hooks";
import { useGetCartItemsQuery } from "@/redux/queries/cart/cartAPI";
import { CartItemDataType } from "@/redux/queries/cart/cartTypes";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import { useEffect, useMemo } from "react";

const useFetchCartItems = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const { data, isLoading, isSuccess, isError } = useGetCartItemsQuery(loggedInUserId!, { skip: loggedInUserId? false : true });
  const { dispatch } = useUserContext();

  const totalAmount = useMemo(() => {
    if (!data || !data.data) return 0;
    
    return data.data.reduce((total: number, item: CartItemDataType) => {
      return item.currentPrice * item.quantity + total;
    }, 0);
  }, [data]);

  useEffect(() => {
    if (totalAmount) {
      dispatch({ type: "itemsTotalAmount", payload: totalAmount });
    }
  }, [totalAmount, dispatch]);

  return {data, isSuccess, totalAmount, isLoading, isError};
};

export default useFetchCartItems;
