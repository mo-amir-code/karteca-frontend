import { IoWallet } from "react-icons/io5";

const Wallet = ({amount, handleClick}:{amount: string, handleClick:Function}) => {
  return (
    <button onClick={()=>handleClick()} style={{width: amount.length * 12 + 56}} className="flex text-text-color items-center smooth_transition cursor-pointer justify-center hover:shadow-md p-2 gap-2 rounded-md bg-primary-color" ><span className="whitespace-nowrap" ><IoWallet size={20}/></span> <span>₹{amount}</span></button>
  )
}

export default Wallet