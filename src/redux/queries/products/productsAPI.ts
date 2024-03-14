import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://memik-backend.onrender.com/api/v1/product"
    }),
    endpoints: (builder) => ({
        getTopProducts: builder.query<APIRequestType, string>({query: (t) => "top"}),
        getLatestProducts: builder.query<APIRequestType, string>({query: (t) => "latest"}),
        getBestCombosProducts: builder.query<APIRequestType, string>({query: (t) => "combos"})
    })
});

export const { useGetTopProductsQuery, useGetLatestProductsQuery, useGetBestCombosProductsQuery } = productsApi


export default productsApi