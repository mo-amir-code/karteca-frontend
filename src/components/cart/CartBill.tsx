import CheckoutButton from "./CheckoutButton";

const CartBill = ({totalAmount}:{totalAmount:number}) => {
  return (
    <div className="bg-white smooth_transition w-full max-md:mx-0 mx-2 rounded-lg text-secondary-color p-4">
      <div className="space-y-3 max-md:text-sm max-sm:text-xs">
        <h2 className="text-xl max-md:text-lg max-sm:text-base font-bold">Summary</h2>
        <div className="space-y-1">
          <h3 className="flex items-center justify-between font-semibold">
            <span>Subtotal</span>
            <span>₹{totalAmount}</span>
          </h3>
          <h3 className="flex items-center justify-between font-semibold">
            <span>Estimated Shipping & Handling</span>
            <span>-</span>
          </h3>
          <h3 className="flex items-center justify-between font-semibold">
            <span>Estimated Tax</span>
            <span>₹54</span>
          </h3>
        </div>
        <div className="py-2">
          <h3 className="flex items-center py-3 border-t border-b border-secondary-color justify-between font-semibold">
            <span>Total</span>
            <span>₹{totalAmount + 54}</span>
          </h3>
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default CartBill;
