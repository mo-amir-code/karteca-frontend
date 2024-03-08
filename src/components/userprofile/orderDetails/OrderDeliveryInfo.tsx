import React from "react";

const OrderDeliveryInfo = () => {
  return (
    <div className="flex">
      <div className="flex-[0.5]">
        <span className="font-medium max-sm:text-sm block">Delivery Address</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">Locality</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">Area</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">City, State</span>
      </div>
      <div className="flex-[0.5]">
        <span className="font-medium max-sm:text-sm block">Contact Details</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">6395212960</span>
        <span className="block text-sm max-sm:text-xs text-secondary-color">
          mo.amir.code@gmail.com
        </span>
        <span className="block text-sm max-sm:text-xs text-blue-600 font-medium">Edit</span>
      </div>
    </div>
  );
};

export default OrderDeliveryInfo;
