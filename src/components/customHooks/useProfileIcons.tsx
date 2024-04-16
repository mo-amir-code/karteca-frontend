import { PiPackageFill } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";
import { MdFolderZip } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoIosWallet } from "react-icons/io";

const useProfileIcons = ({icon}:{icon:string}) => {
    switch(icon){
        case "order":
            return <PiPackageFill className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]" />
        case "dashboard":
            return <MdSpaceDashboard className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]" />
        case "account":
            return <HiUserCircle className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]" />
        case "payment":
            return <IoIosWallet className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]" />
        case "stuff":
            return <MdFolderZip className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]" />
        case "support":
            return <BiSupport className="w-[30px] h-[30px] max-md:w-[20px] max-md:h-[20px]" />
        default:
            return;
    }
}

export default useProfileIcons