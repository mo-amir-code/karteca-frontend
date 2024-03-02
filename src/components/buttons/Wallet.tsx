import Link from "next/link";
import { IoWallet } from "react-icons/io5";

const Wallet = ({amount}:{amount: string}) => {
  return (
    <Link style={{width: amount.length * 12 + 56}} href={"/user/refer"} className="flex items-center smooth_transition cursor-pointer justify-center hover:shadow-md p-2 gap-2 rounded-md bg-primary-color" ><span className="whitespace-nowrap" ><IoWallet size={20} className="text-secondary-color" /></span> <span>₹{amount}</span></Link>
  )
}

export default Wallet