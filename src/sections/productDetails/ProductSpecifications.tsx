import Specs from "@/HOC/Specs";
import Highlights from "@/components/productDetails/Highlights";
import Warranty from "./Warranty";
import Specifications from "./Specifications";
import { ProductActionButton } from "./Hero";

const ProductSpecifications = () => {
  return (
    <div className="flex bg-white p-3 max-md:px-0">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold font-lato">Specifications</h2>
        <div className="py-3 space-y-3">
          <SpecsWrapper />
          <ProductActionButton />
        </div>
      </div>
      <div className="w-[400px] max-[900px]:hidden bg-red-500 h-8"></div>
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
