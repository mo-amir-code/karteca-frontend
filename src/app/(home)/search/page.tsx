import Image from "next/image";
import banner from "@/assets/slider/1.png";
import MaxWidthLayout from "@/HOC/MaxWidthLayout";
import Filter from "@/components/filter";


const Search = () => {
  return (
    <div className="space-y-6" >
        <MaxWidthLayout>
            <ShopBanner />
        </MaxWidthLayout>

        <MaxWidthLayout>
            <Filter />
        </MaxWidthLayout>
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
