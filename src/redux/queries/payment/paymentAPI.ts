import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { VerifyPaymentType } from "./paymentType";


const paymentAPI = createApi({
    reducerPath: "paymentAPI",
    baseQuery: fetchBaseQueryBaseUrlConfiguration("payment"),
    endpoints: (builder) => ({
        verifyPayment: builder.mutation<APIRequestType, VerifyPaymentType>({
            query: (data) => ({
                url: "verify",
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

export const {useVerifyPaymentMutation} = paymentAPI;

export default paymentAPI;