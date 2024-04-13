import ProductCard from "../productCard";
import Heading2 from "../Heading2";
import { memo } from "react";
import FullLoader from "../loader/FullLoader";
import { ProductCardType } from "@/redux/queries/products/productsType";

const TopProducts = ({text, products}:{text:string, products:ProductCardType[]}) => {

  return (
    <div className="pt-2">
      <Heading2 text={text} />
      <div className="grid grid-cols-5 gap-2 max-[1160px]:grid-cols-4 max-[906px]:grid-cols-3 max-[660px]:grid-cols-2">
        {
          products.map((item, idx) => (
            <ProductCard data={item} key={idx} />
          ))
        }
      </div>
    </div>
  );
};

export default memo(TopProducts);
