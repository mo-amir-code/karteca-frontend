import { OrderDeliveryAddressType } from "@/redux/queries/order/orderTypes";
import React from "react";

const OrderDeliveryInfo = ({deliveryData}:{deliveryData:OrderDeliveryAddressType}) => {
  return (
    <div className="flex bottom_to_top_ani">
      <div className="flex-[0.5]">
        <span className="font-medium max-sm:text-sm block">Delivery Address</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">{deliveryData.address}</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">{deliveryData.city}</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">{deliveryData.state}, {deliveryData.postalCode}</span>
      </div>
      <div className="flex-[0.5]">
        <span className="font-medium max-sm:text-sm block">Contact Details</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">{deliveryData.phone}</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">{deliveryData.email}</span>
        <span className="block text-sm max-sm:text-xs text-blue-600 font-medium">Edit</span>
      </div>
    </div>
  );
};

export default OrderDeliveryInfo;
