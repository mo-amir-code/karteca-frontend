"use client"
import CartBill from "../cart/CartBill";
import useFetchCartItems from "../customHooks/useFetchCartItems";

const PaymentArea = () => {
  const {totalAmount} = useFetchCartItems();

  return (
    <div className="flex-[0.35] space-y-4 py-2 w-full max-md:mx-0 mx-2 rounded-lg text-secondary-color">
      {/* <div className="flex item px-3 bg-white">sdsds</div> */}
      <CartBill totalAmount={totalAmount} />
    </div>
  );
};

export default PaymentArea;
