import CheckoutButton from "./CheckoutButton";
import SummaryField, { TotalAmount } from "./SummaryField";

const CartBill = ({totalAmount}:{totalAmount:number}) => {
  return (
    <div className="bg-white smooth_transition w-full max-md:mx-0 lg:mx-2 rounded-lg text-secondary-color p-4">
      <div className="space-y-3 max-md:text-sm max-sm:text-xs">
        <h2 className="text-xl max-md:text-lg max-sm:text-base font-bold">Summary</h2>
        <div className="space-y-1">
          <SummaryField title="Subtotal" amount={totalAmount} />
          <SummaryField/>
          <SummaryField title="Estimated Shipping & Handling"  amount={"-"} />
          <SummaryField title="Estimated Tax"  amount={54} />
        </div>
        <div className="py-2">
          <h3 className="flex items-center py-3 border-t border-b border-secondary-color justify-between font-semibold">
            <span>Total</span>
            <TotalAmount totalAmount={totalAmount} />
          </h3>
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartBill;
