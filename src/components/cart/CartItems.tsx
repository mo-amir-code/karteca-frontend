import CartItem from "./CartItem"

const CartItems = () => {

    return (
        <div className="flex-[0.65] w-full mx-2 max-md:mx-0 px-4 rounded-lg shadow-lg py-4 space-y-4" >
            {
                [1,2].map(()=>(
                    <CartItem/>
                ))
            }
        </div>
    )
}

export default CartItems