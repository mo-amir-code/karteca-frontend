import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthSignupUserType } from "./authTypes";


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
                body:post
            })
        })
    })
});


export const {useSignupUserMutation} = authApi;


export default authApi