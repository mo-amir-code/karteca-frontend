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
  })
});

export const {
    useFetchUserTransactionRequestsQuery
} = adminApi;

export default adminApi;
