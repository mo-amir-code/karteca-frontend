import { CartItemDataType } from "@/redux/queries/cart/cartTypes";
import CartItem, { MobileCartItem } from "./CartItem";
import { memo } from "react";

const CartItems = ({ data }: { data: CartItemDataType[] }) => {

  return (
    <div className="flex-[0.65] bg-white w-full mx-2 max-md:mx-0 px-4 rounded-lg shadow-lg py-4 space-y-4">
      {data.map((cart) => (
        <div key={cart._id}>
          <CartItem cartData={cart} />
          <MobileCartItem cartData={cart}/>
        </div>
      ))}
    </div>
  );
};

export default memo(CartItems);
