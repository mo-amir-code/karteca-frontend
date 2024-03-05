import Image from "next/image";
import banner from "@/assets/slider/1.png";
import Filter from "@/components/filter";
import MobileFilter from "@/components/filter/MobileFilter";

const Search = () => {
  return (
    <div className="space-y-6 max-md:space-y-0">
      <div className="max-md:hidden">
          <ShopBanner />
      </div>

      {/* Mobile filter */}
        <MobileFilter />

        <Filter />
    </div>
  );
};

const ShopBanner = () => {
  return (
    <div className="pt-2">
      <Image src={banner} alt="Footer banner" />
    </div>
  );
};

export default Search;
