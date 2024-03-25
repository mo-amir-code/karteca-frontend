import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { APICartType } from "./cartTypes";

const cartAPI = createApi({
    reducerPath: "cartAPI",
    baseQuery: fetchBaseQueryBaseUrlConfiguration("cart"),
    endpoints: (builder) => ({
        addToCart: builder.mutation<APIRequestType, APICartType>({
            query: (cartData) => ({
              url: "/",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: cartData,
            })
          })
    })
});

export const {useAddToCartMutation} = cartAPI;

export default cartAPI;