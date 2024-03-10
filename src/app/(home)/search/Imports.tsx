import Filter from "@/components/filter";
import MobileFilter from "@/components/filter/MobileFilter";
import Image from "next/image";
import banner from "@/assets/slider/1.png";

const Imports = () => {
  return (
    <>
      <div className="max-md:hidden">
        <ShopBanner />
      </div>

      {/* Mobile filter */}
      <MobileFilter />

      <Filter />
    </>
  );
};

const ShopBanner = () => {
  return (
    <div className="pt-2">
      <Image src={banner} alt="Footer banner" />
    </div>
  );
};

export default Imports;
