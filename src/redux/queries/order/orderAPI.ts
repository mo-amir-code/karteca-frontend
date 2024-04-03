import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { PostOrderType } from "./orderTypes";


const orderAPI = createApi({
    reducerPath: "orderAPI",
    baseQuery: fetchBaseQueryBaseUrlConfiguration("order"),
    tagTypes: ["updateOrder"],
    endpoints: (builder) => ({
        createOrder: builder.mutation<APIRequestType, PostOrderType>({
            query: (data) => ({
                url: "/",
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:data,
                credentials: "include"
            }),
            invalidatesTags: ["updateOrder"]
        }),
        getOrder: builder.query<APIRequestType, string>({
            query: (userId) => ({
                url: `/${userId}`,
                headers:{
                    "Content-Type":"application/json"
                },
                credentials: "include",
            }),
            providesTags: ["updateOrder"]
        }),
        getOrderDetailsById: builder.query<APIRequestType, string>({
            query: (orderId) => ({
                url: `/details/${orderId}`,
                headers:{
                    "Content-Type":"application/json"
                },
                credentials: "include",
            })
        })
    })
});

export const {useCreateOrderMutation, useGetOrderQuery, useGetOrderDetailsByIdQuery} = orderAPI;

export default orderAPI