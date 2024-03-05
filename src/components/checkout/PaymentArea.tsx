import React from "react";
import CartBill from "../cart/CartBill";

const PaymentArea = () => {
  return (
    <div className="flex-[0.35] space-y-4 py-2 w-full max-md:mx-0 mx-2 rounded-lg text-secondary-color">
      {/* <div className="flex item px-3 bg-white">sdsds</div> */}
      <CartBill />
    </div>
  );
};

export default PaymentArea;
