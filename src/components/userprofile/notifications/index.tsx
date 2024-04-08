"use client";
import { memo } from "react";
import Notification from "./Notification";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import { useGetUserNotificationsQuery } from "@/redux/queries/notification/notificationAPI";
import IsLoading from "@/HOC/IsLoading";
import { NotificationType } from "@/redux/queries/notification/ntfTypes";
import Empty from "@/components/notfound/Empty";

const Index = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const { data, isLoading, isFetching, isSuccess, isError } =
    useGetUserNotificationsQuery(loggedInUserId!);

  return (
    <IsLoading
      isLoading={isLoading || isFetching}
      isSuccess={isSuccess}
      isError={isError}
    >
      <div className="space-y-6">
        <h4 className="font-medium">Notifications</h4>
        <div className="w-full">
          {
            data?.data?.notifications?.length?
            data?.data?.notifications?.map((ntf:NotificationType) => (
              <Notification key={ntf._id} data={ntf} />
            )) : <Empty msg="We did not find any notifications" />
          }
        </div>
      </div>
    </IsLoading>
  );
};

export default memo(Index);
