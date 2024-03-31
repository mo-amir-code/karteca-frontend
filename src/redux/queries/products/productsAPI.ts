import { APIRequestType } from "@/redux/RootTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchBaseQueryBaseUrlConfiguration = (basePath:string) => fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_SERVER_ORIGIN}/api/v1/${basePath}`
});

const productsApi = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("product"),
  endpoints: (builder) => ({
    getTopProducts: builder.query<APIRequestType, string>({
      query: (t) => "top",
    }),
    getLatestProducts: builder.query<APIRequestType, string>({
      query: (t) => "latest",
    }),
    getBestCombosProducts: builder.query<APIRequestType, string>({
      query: (t) => "combos",
    }),
    getProductById: builder.query<APIRequestType, string>({
      query: (productId) => productId,
    }),
    getProductCategories: builder.query<APIRequestType, null>({
      query: () => "categories",
    }),
    getFilterProducts: builder.query<APIRequestType, string>({
      query: (query) => `search?${query}`,
    }),
  }),
});

export const {
  useGetTopProductsQuery,
  useGetLatestProductsQuery,
  useGetBestCombosProductsQuery,
  useGetProductByIdQuery,
  useGetProductCategoriesQuery,
  useGetFilterProductsQuery
} = productsApi;

export default productsApi;
