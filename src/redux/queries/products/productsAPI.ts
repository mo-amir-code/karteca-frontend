import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/product"
    }),
    endpoints: (builder) => ({
        getTopProducts: builder.query<APIRequestType, string>({query: (t) => "top"}),
        getLatestProducts: builder.query<APIRequestType, string>({query: (t) => "latest"}),
        getBestCombosProducts: builder.query<APIRequestType, string>({query: (t) => "combos"}),
        getProductById: builder.query<APIRequestType, string>({query: (productId) => productId})
    })
});

export const { useGetTopProductsQuery, useGetLatestProductsQuery, useGetBestCombosProductsQuery, useGetProductByIdQuery } = productsApi


export default productsApi