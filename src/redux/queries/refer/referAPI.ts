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
    getReferralDashboard: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `dashboard/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
    getShortReferralDashboard: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `short-dashboard/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
    addReferMoney: builder.mutation<APIRequestType,{ userId: string; amount: number }>({
      query: (data) => ({
        url: `addmoney`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetReferralEarningQuery,
  useGetReferralDashboardQuery,
  useAddReferMoneyMutation,
  useGetShortReferralDashboardQuery,
} = referAPI;

export default referAPI;
