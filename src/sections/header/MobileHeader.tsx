import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/brand/logo.png"
import MobileWallet from "@/components/buttons/MobileWallet"
import SearchBar from "@/components/searchbar"


const MobileHeader = () => {
  return (
    <header className="py-2 px-4 md:hidden space-y-4" >
        <div className="flex items-center justify-between gap-1">
            <div className="flex items-center justify-center w-12 h-12 cursor-pointer max-sm:w-10 max-sm:h-10">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="memik logo"
                  layout="fixed"
                  height={48}
                  width={48}
                />
              </Link>
            </div>

            <MobileWallet amount="23" />
          </div>

          <div>
            <SearchBar isOnMobile={true} />
          </div>
    </header>
  )
}

export default MobileHeader