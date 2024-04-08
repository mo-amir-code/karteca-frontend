import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQueryBaseUrlConfiguration } from "../products/productsAPI";
import { APIRequestType } from "@/redux/RootTypes";

const ntfAPI = createApi({
  reducerPath: "NotificationAPI",
  baseQuery: fetchBaseQueryBaseUrlConfiguration("notification"),
  endpoints: (builder) => ({
    getUserNotifications: builder.query<APIRequestType, string>({
      query: (userId) => ({
        url: `/${userId}`,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUserNotificationsQuery } = ntfAPI;

export default ntfAPI;
