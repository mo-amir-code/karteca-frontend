import Specs from "@/HOC/Specs";
import Highlights from "@/components/productDetails/Highlights";
import Warranty from "../../components/productDetails/Warranty";
import Specifications from "../../components/productDetails/Specifications";
import { ProductActionButton } from "./Hero";
import Image from "next/image";
import sponsor from "@/assets/productsImage/dummy.png"

const ProductSpecifications = () => {
  return (
    <div className="flex bg-white p-3 max-md:px-0">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold font-lato">Specifications</h2>
        <div className="py-3 space-y-3">
          <SpecsWrapper />
          <div className="w-full md:hidden" >
          <ProductActionButton />
          </div>
        </div>
      </div>
      <div className="w-[400px] max-[900px]:hidden">
        <Image src={sponsor} alt="sponsor" />
      </div>
    </div>
  );
};

const SpecsWrapper = () => {
  return (
    <>
      <Specs title="Highlights">
        <Highlights />
      </Specs>
      <Specs title="Product Specs">
        <Specifications />
      </Specs>
      <Specs title="Warranty">
        <Warranty />
      </Specs>
    </>
  );
};

export default ProductSpecifications;
