import Image from "next/image"
import productImage from "@/assets/productsImage/dummy2.png"
import { IoMdHeart } from "react-icons/io"
import { FaTrash } from "react-icons/fa";


const CartItem = () => {
        

    return (
        <div className="w-full" >
            <div className="flex border-b border-secondary-color py-4 max-md:flex-col max-md:gap-6" >
                <div className="w-[250px] max-md:w-full h-[300px] rounded-lg overflow-hidden shadow-lg" >
                    <Image src={productImage} alt="cart image" />
                </div>
                <div className="flex-grow" >
                    <div className="max-md:space-y-2 flex flex-col justify-between h-full" >
                        <div className="w-full text-secondary-color flex justify-between px-4 max-md:px-2" >
                            {/* Product details */}
                            <div className="flex flex-col justify-between items-start" >
                                <div>
                                    <h2 className="text-2xl font-semibold max-sm:text-lg hover:text-primary-color smooth_transition" >Ultra Smartwatch First Copy, Original Okat se bahar</h2>
                                    <div>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs" >FRAME: <span className="font-bold" >12</span></p>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs flex items-center justify-start gap-2" ><span>COLOR:</span> <span style={{backgroundColor: `red`}} className="w-3 hover:shadow-lg smooth_transition h-3 rounded-full" /></p>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs" >NUMBER OF SPEED: <span className="font-bold" >43</span></p>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs" >TYPE: <span className="font-bold" >Gadgets</span></p>
                                        <p className="font-semibold text-sm text-gray-500 max-sm:text-xs" >COUNTRY REGISTRATION: <span className="font-bold" >INDIA</span></p>
                                    </div>
                                </div>
                            </div>

                            {/* Product Cost, Quantity */}
                            <div className="flex flex-col items-end space-y-4" >
                                <div className="space-y-1" >
                                    <h3 className="text-base font-medium text-secondary-color text-end max-sm:text-sm" >Quantity:</h3>
                                    <div className="text-secondary-color_3 " >
                                        <span className="flex w-32 items-center justify-start border-2 border-secondary-color_3 hover:shadow-lg duration-200 transition-all" >
                                            <button className="h-10 w-10 flex items-center justify-center cursor-pointer hover:text-primary-color duration-200 transition-all" >-</button>
                                            <span className="h-10 w-10 flex items-center font-semibold justify-center" >3</span>
                                            <button className="h-10 w-10 flex items-center justify-center cursor-pointer hover:text-primary-color duration-200 transition-all" >+</button>
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-secondary-color text-end max-sm:text-sm" >Total</h3>
                                    <h3 className="text-base font-medium text-secondary-color max-sm:text-sm" >6756</h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-4 max-md:px-2 items-center justify-start gap-2 flex-wrap" >
                            <button className=" px-5 py-2 bg-primary-color rounded-lg hover:-translate-y-2 shadow-lg smooth_transition flex items-center justify-center gap-1 text-secondary-color font-semibold" ><FaTrash size={22} className="text-primary-color" /><span className="pt-1" >REMOVE</span></button>
                            <button className=" px-5 py-2 rounded-lg smooth_transition flex items-center justify-center gap-1 text-secondary-color font-semibold" ><IoMdHeart size={22} className="text-primary-color" /><span className="pt-1" >WISHLIST</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem