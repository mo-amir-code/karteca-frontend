import { createApi } from "@reduxjs/toolkit/query/react";
import { AuthSigninUserType, AuthSignupUserType } from "./authTypes";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";

const authApi = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("auth"),
  endpoints: (builder) => ({
    signupUser: builder.mutation<APIRequestType, AuthSignupUserType>({
      query: (post) => ({
        url: "signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: post,
        credentials: "include",
      }),
    }),

    signinUser: builder.mutation<APIRequestType, AuthSigninUserType>({
      query: (post) => ({
        url: "signin",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),

    verifyUser: builder.mutation<APIRequestType, { otp: number, from?:string }>({
      query: (post) => ({
        url: "verify",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),

    resendOTP: builder.mutation<APIRequestType, { token: string }>({
      query: (post) => ({
        url: "resend-otp",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),

    sendOTP: builder.mutation<APIRequestType, { userId: string, email:string, from?:string }>({
      query: (post) => ({
        url: "send-otp",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),

    forgotPassword: builder.mutation<APIRequestType, { email: string }>({
      query: (post) => ({
        url: "forgot-password",
        method: "POST",
        body: post,
        credentials: "include",
      }),
    }),

    resetPassword: builder.mutation<
      APIRequestType,
      { otp: number; token?: string | undefined; newPassword: string }
    >({
      query: (post) => ({
        url: "reset-password",
        method: "PATCH",
        body: post,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useSigninUserMutation,
  useVerifyUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useResendOTPMutation,
  useSendOTPMutation
} = authApi;

export default authApi;
