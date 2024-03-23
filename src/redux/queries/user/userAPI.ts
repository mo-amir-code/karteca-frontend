import {createApi} from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";
import { UpdateUserType } from "./userTypes";


const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQueryBaseUrlConfiguration("user"),
    tagTypes: ["updateUser"],
    endpoints: (builder) => ({
        getUserInfo: builder.query<APIRequestType, string>({
            query: (userId) => ({
                url:userId,
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }),
            providesTags: ["updateUser"]
        }),
        updateUserInfo: builder.mutation<APIRequestType, UpdateUserType>({
            query: (updatedUserData) => ({
                url: "edit",
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: updatedUserData,
            }),
            invalidatesTags: ["updateUser"]
        })
    })
});

export const { useGetUserInfoQuery, useUpdateUserInfoMutation } = userAPI;

export default userAPI;