import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { ChildCreateCategoryType, CreateAdminType, CreateCategoryType, ProductCreateType } from "./adminTypes";

const adminApi = createApi({
  reducerPath: "adminAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("admin"),
  tagTypes: ["getupis"],
  endpoints: (builder) => ({
    fetchUserTransactionRequests: builder.query<APIRequestType, null>({
        query: () => ({
          url: `/transaction/requests`,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
    }),
    fetchUserWithdrawalRequests: builder.query<APIRequestType, null>({
        query: () => ({
          url: `/withdrawal/requests`,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
    }),
    fetchUserCount: builder.query<APIRequestType, null>({
        query: () => ({
          url: `/user/count`,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
    }),
    fetchProductCategories: builder.query<APIRequestType, { parentCategory?:string | null }>({
        query: ({ parentCategory }) => ({
          url: `/product/categories?${parentCategory? "parentCategory="+parentCategory : null}`,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
    }),
    createProduct: builder.mutation<APIRequestType, ProductCreateType>({
        query: (data) => ({
          url: `/product`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
          credentials: "include",
        }),
    }),
    uploadProductImage: builder.mutation<APIRequestType, any>({
        query: (data) => ({
          url: `/product/image/upload`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
          credentials: "include",
        }),
    }),
    deleteProductImage: builder.mutation<APIRequestType, { publicId:string }>({
        query: (data) => ({
          url: `/product/image`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
          credentials: "include",
        }),
    }),
    createCategory: builder.mutation<APIRequestType, CreateCategoryType>({
        query: (data) => ({
          url: `/category`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
          credentials: "include",
        }),
    }),
    createChildCategory: builder.mutation<APIRequestType, ChildCreateCategoryType>({
        query: (data) => ({
          url: `/child/category`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
          credentials: "include",
        }),
    }),
    createAdmin: builder.mutation<APIRequestType, CreateAdminType>({
        query: (data) => ({
          url: `/create`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
          credentials: "include",
        }),
    }),
    fetchAdminUpis: builder.query<APIRequestType, null>({
        query: () => ({
          url: `/upi`,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }),
        providesTags: ["getupis"]
    }),
    activeUpi: builder.mutation<APIRequestType, { userId:string }>({
      query: (data) => ({
        url: `/upi/active`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["getupis"]
  }),
  })
});

export const {
    useFetchUserTransactionRequestsQuery,
    useFetchUserWithdrawalRequestsQuery,
    useFetchUserCountQuery,
    useFetchProductCategoriesQuery,
    useCreateProductMutation,
    useUploadProductImageMutation,
    useDeleteProductImageMutation,
    useCreateCategoryMutation,
    useCreateAdminMutation,
    useFetchAdminUpisQuery,
    useActiveUpiMutation,
    useCreateChildCategoryMutation
} = adminApi;

export default adminApi;
