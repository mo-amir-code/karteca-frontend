import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";

const adminApi = createApi({
  reducerPath: "adminAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("admin"),
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
  })
});

export const {
    useFetchUserTransactionRequestsQuery,
    useFetchUserWithdrawalRequestsQuery,
    useFetchUserCountQuery
} = adminApi;

export default adminApi;
