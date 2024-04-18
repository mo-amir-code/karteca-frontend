import Image from "next/image";
import logo from "@/assets/brand/Logo.svg";
import SearchBar from "@/components/searchbar";
import MaxWidthLayout from "@/HOC/MaxWidthLayout";
import RightSideBar from "@/components/header/rightSideBar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full max-md:hidden bg-white shadow-md">
      <MaxWidthLayout>
        <HeaderContent />
      </MaxWidthLayout>
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
            <div className="flex items-center justify-center w-12 h-12 cursor-pointer max-sm:w-10 max-sm:h-10">
              <Link href={"/"} >
                <Image
                  src={logo}
                  alt={process.env.NEXT_PUBLIC_COMPANY_NAME || "karteca"}
                  layout="fixed"
                  height={48}
                  width={48}
                />
              </Link>
            </div>
          </div>
          <SearchBar />
        </div>

        {/* Header right part */}
        <RightSideBar />
      </div>
    </header>
  );
};

export default Header;
