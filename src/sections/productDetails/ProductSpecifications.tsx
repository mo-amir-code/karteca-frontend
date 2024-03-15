import Specs from "@/HOC/Specs";
import Highlights from "@/components/productDetails/Highlights";
import Warranty from "../../components/productDetails/Warranty";
import Specifications from "../../components/productDetails/Specifications";
import Image from "next/image";
import sponsor from "@/assets/productsImage/dummy.png"
import { ProductActionButton } from "@/components/productDetails/Images";

type ProductSpecsType = {
  highlights:string[], 
  specs:Object, 
  warranty:object,
  description: string
}

const ProductSpecifications = ({highlights, specs, warranty, description}:ProductSpecsType) => {
  return (
    <div className="flex bg-white p-3 max-md:px-0">
      <div className="flex-grow">
        <h2 className="text-lg font-semibold font-lato">Specifications</h2>
        <div className="py-3 space-y-3">
          <SpecsWrapper highlights={highlights} specs={specs} warranty={warranty} description={description}/>
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

const SpecsWrapper = ({highlights, specs, warranty, description}:ProductSpecsType) => {
  return (
    <>
    <Specs title="Description" >
      <p className="text-xs" >{description}</p>
    </Specs>
      <Specs title="Highlights">
        <Highlights highlights={highlights} />
      </Specs>
      <Specs title="Product Specifications">
        <Specifications specs={specs}  />
      </Specs>
      <Specs title="Warranty">
        <Warranty warranty={warranty} />
      </Specs>
    </>
  );
};

export default ProductSpecifications;
