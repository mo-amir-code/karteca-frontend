import Link from "next/link";

const CartBill = () => {
  return (
    <div className="bg-white w-full max-md:mx-0 mx-2 rounded-lg text-secondary-color p-4">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Summary</h2>
        <div className="space-y-1">
          <h3 className="flex items-center justify-between font-semibold">
            <span>Subtotal</span>
            <span>456</span>
          </h3>
          <h3 className="flex items-center justify-between font-semibold">
            <span>Estimated Shipping & Handling</span>
            <span>-</span>
          </h3>
          <h3 className="flex items-center justify-between font-semibold">
            <span>Estimated Tax</span>
            <span>54</span>
          </h3>
        </div>
        <div className="py-2">
          <h3 className="flex items-center py-3 border-t border-b border-secondary-color justify-between font-semibold">
            <span>Total</span>
            <span>567</span>
          </h3>
        </div>
        <Link href={"/user/cart/checkout"} className="w-full text-text-color py-3 font-bold shadow-lg smooth_transition hover:-translate-y-1 flex items-center justify-center bg-primary-color rounded-full">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartBill;
