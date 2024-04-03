import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";

const referAPI = createApi({
  reducerPath: "referAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("refer"),
  endpoints: (builder) => ({
    getReferralEarning: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `earning/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetReferralEarningQuery } = referAPI;

export default referAPI;
