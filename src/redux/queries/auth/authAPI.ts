import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthSigninUserType, AuthSignupUserType } from "./authTypes";


const authApi = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQuery({
        baseUrl:
          process.env.NEXT_PUBLIC_DEVELOPMENT === "development"
            ? "http://localhost:8080/api/v1/auth"
            : "https://memik-backend.onrender.com/api/v1/auth",
      }),
    endpoints: (builder) => ({
        signupUser: builder.mutation<APIRequestType, AuthSignupUserType>({
            query: (post) => ({
                url: "signup",
                method: "POST",
                body:post,
                credentials: "include"
            })
        }),

        signinUser: builder.mutation<APIRequestType, AuthSigninUserType>({
            query: (post) => ({
                url: "signin",
                method: "POST",
                body:post,
                credentials: "include"
            })
        }),

        verifyUser: builder.mutation<APIRequestType, {otp:string}>({
            query: (post) => ({
                url: "verify",
                method: "POST",
                body:post,
                credentials: "include"
            })
        })
    })
});


export const {useSignupUserMutation, useSigninUserMutation, useVerifyUserMutation} = authApi;


export default authApi