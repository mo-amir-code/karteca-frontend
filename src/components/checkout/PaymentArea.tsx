"use client";
import CartBill from "../cart/CartBill";
import useFetchCartItems from "../customHooks/useFetchCartItems";
import PaymentMode from "./PaymentMode";
import UseWallets from "./UseWallets";

const PaymentArea = () => {
  const { totalAmount } = useFetchCartItems();

  return (
    <div className="flex-[0.35] space-y-4 py-2 w-full max-md:mx-0 lg:mx-2 rounded-lg text-secondary-color">
      {/* Use Wallet */}
      <div className="space-y-2 w-full lg:mx-2 px-6 py-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold max-md:text-lg max-sm:text-base">
          Pay With Wallet
        </h2>
        <UseWallets />
      </div>

      {/* Select Payment Mode */}
      <div className="space-y-2 w-full lg:mx-2 px-6 py-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold max-md:text-lg max-sm:text-base">
          Select Payment Mode
        </h2>
        <PaymentMode />
      </div>

      {/* <div className="flex item px-3 bg-white">sdsds</div> */}
      <CartBill totalAmount={totalAmount} />
    </div>
  );
};

export default PaymentArea;
