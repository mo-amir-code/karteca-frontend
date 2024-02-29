import Image from "next/image";
import logo from "@/assets/brand/logo.png";
import SearchBar from "@/components/searchbar";
import MaxWidthLayout from "@/HOC/MaxWidthLayout";
import { navbarData } from "@/data";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import Wallet from "@/components/buttons/Wallet";

const Header = () => {
  return (
    <div className="w-full shadow-md" >
      <MaxWidthLayout children={<HeaderContent />} />
    </div>
  );
};



const HeaderContent = () => {

  return (
    <header className="p-2">
      <div className="flex items-center justify-between gap-6">

        {/* Header left part */}
        <div className="w-full flex items-center gap-3">
          <div className="flex items-center justify-center gap-1">
            <div className="flex items-center justify-center w-12 h-12" >
            <Image src={logo} alt="memik logo" layout="fixed" height={48} width={48} />
            </div  >
          </div>
          <SearchBar />
        </div>

        {/* Header right part */}
        <div>
          <ul className="flex items-center justify-end gap-8" >
          {
            navbarData.map((item, idx) => (
              <li key={idx} className="flex items-center justify-center gap-2 cursor-pointer" >{
                (()=>{
                  switch(item.name){
                    case "Cart":
                      return <FaCartShopping scale={20} className="text-secondary-color" />
                    case "Profile":
                      return <FaUser scale={20} className="text-secondary-color" />
                    default:
                      return;
                  }
                })()
              }<span>{item.name}</span></li>
            ))
            }
            <li>
            <Wallet text="124" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
