import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { PostOrderType } from "./orderTypes";


const orderAPI = createApi({
    reducerPath: "orderAPI",
    baseQuery: fetchBaseQueryBaseUrlConfiguration("order"),
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
            })
        })
    })
});

export const {useCreateOrderMutation} = orderAPI;

export default orderAPI