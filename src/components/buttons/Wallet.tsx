import Link from "next/link";
import { IoWallet } from "react-icons/io5";

const Wallet = ({text}:{text: string}) => {
  return (
    <Link style={{width: text.length * 12 + 56}} href={"/user/refer"} className="flex items-center smooth_transition cursor-pointer justify-center hover:shadow-md p-2 gap-2 rounded-md bg-primary-color" ><span className="w-[20px] h-[20px]" ><IoWallet size={20} className="text-secondary-color" /></span> <span>₹{text}</span></Link>
  )
}

export default Wallet