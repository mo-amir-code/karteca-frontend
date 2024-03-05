import CartBill from "@/components/cart/CartBill";
import CartItems from "@/components/cart/CartItems";

const Cart = () => {
  return (
    <div className="mx-auto w-full">
      <div className="w-full flex justify-center py-4 max-lg:flex-col max-lg:gap-6">
        <CartItems />
        <CartBill />
      </div>
    </div>
  );
};

export default Cart;
