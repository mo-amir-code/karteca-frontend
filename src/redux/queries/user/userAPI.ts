import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { APIChangePasswordType, UpdateUserType, UserAddressType } from "./userTypes";

const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("user"),
  tagTypes: ["updateUser", "updateAddress", "updateWishlist"],
  endpoints: (builder) => ({
    getUserInfo: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: userId,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      providesTags: ["updateUser"],
    }),
    getUserAddressess: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `addresses/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      providesTags: ["updateAddress"],
    }),
    getUserTransactions: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `transactions/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
    getUserWishlistItems: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `wishlist/items/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      providesTags: ["updateWishlist"],
    }),
    getUserWishlist: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `wishlist/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
      providesTags: ["updateWishlist"],
    }),
    addUserWishlistItem: builder.mutation<APIRequestType, {userId:string, productId:string}>({
      query: (data) => ({
        url: `wishlist/items`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: data
      }),
      invalidatesTags: ["updateWishlist"],
    }),
    deleteUserWishlistItem: builder.mutation<APIRequestType, {userId:string, productId:string}>({
      query: (data) => ({
        url: `wishlist/items`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: data
      }),
      invalidatesTags: ["updateWishlist"],
    }),
    updateUserInfo: builder.mutation<APIRequestType, UpdateUserType>({
      query: (updatedUserData) => ({
        url: "edit",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: updatedUserData,
      }),
      invalidatesTags: ["updateUser"],
    }),
    addUserAddress: builder.mutation<APIRequestType, UserAddressType>({
      query: (addressData) => ({
        url: "address",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: addressData,
      }),
      invalidatesTags: ["updateAddress"],
    }),
    deleteUserAddress: builder.mutation<APIRequestType, {addressId:string}>({
      query: (addressId) => ({
        url: "address",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: addressId,
      }),
      invalidatesTags: ["updateAddress"],
    }),
    updateUserAddress: builder.mutation<APIRequestType, UserAddressType>({
      query: (updateAddress) => ({
        url: "address",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: updateAddress,
      }),
      invalidatesTags: ["updateAddress"],
    }),
    updateUserPassword: builder.mutation<APIRequestType, APIChangePasswordType>({
      query: (updatePassword) => ({
        url: "password",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: updatePassword,
      })
    })
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useGetUserAddressessQuery,
  useAddUserAddressMutation,
  useDeleteUserAddressMutation,
  useUpdateUserAddressMutation,
  useGetUserWishlistItemsQuery,
  useAddUserWishlistItemMutation,
  useDeleteUserWishlistItemMutation,
  useGetUserWishlistQuery,
  useUpdateUserPasswordMutation,
  useGetUserTransactionsQuery
} = userAPI;

export default userAPI;
