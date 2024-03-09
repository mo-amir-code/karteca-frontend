"use client";
import React from "react";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import Loader from "@/components/loader/Loader";
const withLoadingIndicator = (
  importComponent: () => Promise<{ default: ComponentType<any> }>
) =>
  dynamic(() => importComponent(), {
    loading: () => <Loader />,
  });

const useMainProfile = ({ profile }: { profile: string }) => {
  switch (profile) {
    case "profile":
      return <UserPersonalInfo />;
    case "addresses":
      return <ManageAddresses />;
    case "notification":
      return <Notifications />;
    case "dashboard":
      return <ReferDashboard />;
    case "orders":
      return <MyOrders />;
    case "orderDetails":
      return <OrderDetails />;
    case "wishlist":
      return <Wishlist />;
    default:
      return;
  }
};

export default useMainProfile;

const UserPersonalInfo = dynamic(
  () => import("@/components/userprofile/personalInfo"),
  { ssr: false }
);
const ManageAddresses = withLoadingIndicator(
  () => import("@/components/userprofile/manageAddresses")
);
const Notifications = withLoadingIndicator(
  () => import("@/components/userprofile/notifications")
);
const ReferDashboard = withLoadingIndicator(
  () => import("@/components/userprofile/referDashboard")
);
const MyOrders = withLoadingIndicator(
  () => import("@/components/userprofile/orders")
);
const OrderDetails = withLoadingIndicator(
  () => import("@/components/userprofile/orderDetails")
);
const Wishlist = withLoadingIndicator(
  () => import("@/components/userprofile/wishlist")
);
