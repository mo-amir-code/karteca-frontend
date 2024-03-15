import { memo } from "react";

const CheckDeliveryPincode = () => {
  return (
    <div className="flex items-center justify-center max-w-[250px] border p-2 gap-2 max-md:gap-1">
      <input
        disabled // It will be enable
        type="number"
        className="w-full outline-none bg-transparent text-sm font-medium"
        placeholder="Enter Delivery Pincode"
      />
      <button
        disabled // It will be enable
        style={{ width: "max-content" }}
        className="outline-none font-semibold text-primary-color font-lato text-sm"
      >
        Check
      </button>
    </div>
  );
};

export default memo(CheckDeliveryPincode);
