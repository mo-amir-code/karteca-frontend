import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import {
  CancelPaymentType,
  CreateSubscriptionType,
  VerifyPaymentRequestType,
  VerifyPaymentType,
  WithdrawalRequestType,
} from "./paymentType";
import { WithdrawalRequestVerificationType } from "../admin/adminTypes";

const paymentAPI = createApi({
  reducerPath: "paymentAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("payment"),
  endpoints: (builder) => ({
    verifyPayment: builder.mutation<APIRequestType, VerifyPaymentType>({
      query: (data) => ({
        url: "verify",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    verifyPaymentRequest: builder.mutation<
      APIRequestType,
      VerifyPaymentRequestType
    >({
      query: (data) => ({
        url: "verify-request",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    cancelPayment: builder.mutation<APIRequestType, CancelPaymentType>({
      query: (data) => ({
        url: "/cancel",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    buySubscription: builder.mutation<APIRequestType, CreateSubscriptionType>({
      query: (data) => ({
        url: "/subscription",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    withdrawalRequest: builder.mutation<APIRequestType, WithdrawalRequestType>({
      query: (data) => ({
        url: "/withdrawal",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        credentials: "include",
      }),
    }),
    withdrawalVerify: builder.mutation<APIRequestType, WithdrawalRequestVerificationType>({
      query: (data) => ({
        url: "/withdrawal/verify",
        method: "PATCH",
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
  useVerifyPaymentMutation,
  useVerifyPaymentRequestMutation,
  useCancelPaymentMutation,
  useBuySubscriptionMutation,
  useWithdrawalRequestMutation,
  useWithdrawalVerifyMutation
} = paymentAPI;

export default paymentAPI;
