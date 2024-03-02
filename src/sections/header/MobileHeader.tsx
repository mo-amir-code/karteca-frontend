import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/brand/logo.png"
import MobileWallet from "@/components/buttons/MobileWallet"


const MobileHeader = () => {
  return (
    <header className="py-2 px-4 md:hidden" >
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

    </header>
  )
}

export default MobileHeader