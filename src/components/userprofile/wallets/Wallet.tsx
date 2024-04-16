import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { GiTwoCoins } from "react-icons/gi";
import { LiaNetworkWiredSolid } from "react-icons/lia";

const Wallet = ({name, amount, icon}:{name:string, amount:number, icon:string}) => {
  return (
    <div className={`p-4 flex-1 flex ${icon === "coin"? "max-[960px]:flex-row-reverse" : null} justify-between rounded-lg bg-primary-color text-white`} >
        <div className="flex flex-col justify-end" >
            <p className="text-xl font-semibold mb-1 max-sm:text-lg" >₹{amount}</p>
            <p className="text-sm max-sm:text-xs" >{name}</p>
        </div>
        {
            (()=>{
                switch(icon){
                    case "main":
                        return <HiMiniCurrencyRupee className="w-14 h-14 max-sm:w-12 max-sm:h-12" />
                    case "coin":
                        return <GiTwoCoins className="w-14 h-14 max-sm:w-12 max-sm:h-12" />
                    case "refer":
                        return <LiaNetworkWiredSolid className="w-14 h-14 max-sm:w-12 max-sm:h-12" />
                    default:
                        return null;
                }
            })()
        }
    </div>
  )
}

export default Wallet
