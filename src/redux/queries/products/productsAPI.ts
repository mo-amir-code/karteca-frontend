import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/api/v1/product"
    }),
    endpoints: (builder) => ({
        getTopProducts: builder.query<APIRequestType, string>({query: (t) => "top"})
    })
});

export const { useGetTopProductsQuery } = productsApi


export default productsApi