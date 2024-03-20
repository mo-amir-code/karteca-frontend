import { createApi } from "@reduxjs/toolkit/query/react";
import { AuthSigninUserType, AuthSignupUserType } from "./authTypes";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";


const authApi = createApi({
    reducerPath: "authAPI",
    baseQuery: fetchBaseQueryBaseUrlConfiguration("auth"),
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