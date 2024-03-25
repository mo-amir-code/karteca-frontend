import { CartItemDataType } from "@/redux/queries/cart/cartTypes"
import CartItem from "./CartItem"

const CartItems = ({data}:{data:CartItemDataType[]}) => {

    return (
        <div className="flex-[0.65] bg-white w-full mx-2 max-md:mx-0 px-4 rounded-lg shadow-lg py-4 space-y-4" >
            {
                data.map((cart, idx)=>(
                    <CartItem cartData={cart} key={idx}/>
                ))
            }
        </div>
    )
}

export default CartItems