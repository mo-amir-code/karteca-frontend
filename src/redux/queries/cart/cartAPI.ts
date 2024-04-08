import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { APICartType } from "./cartTypes";

const cartAPI = createApi({
  reducerPath: "cartAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("cart"),
  tagTypes: ["updateCart"],
  endpoints: (builder) => ({
    getCartItems: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      providesTags: ["updateCart"],
    }),
    getCartCounts: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `/count/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      providesTags: ["updateCart"],
    }),
    getWallets: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `/wallets/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
    addToCart: builder.mutation<APIRequestType, APICartType>({
      query: (cartData) => ({
        url: "/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: cartData,
      }),
      invalidatesTags: ["updateCart"],
    }),
    updateCart: builder.mutation<
      APIRequestType,
      { cartId: string; quantity: number }
    >({
      query: (cartData) => ({
        url: "/",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: cartData,
      }),
      invalidatesTags: ["updateCart"],
    }),
    deleteCart: builder.mutation<APIRequestType, string>({
      query: (cartId) => ({
        url: `/${cartId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      invalidatesTags: ["updateCart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartItemsQuery,
  useUpdateCartMutation,
  useDeleteCartMutation,
  useGetCartCountsQuery,
  useGetWalletsQuery
} = cartAPI;

export default cartAPI;
