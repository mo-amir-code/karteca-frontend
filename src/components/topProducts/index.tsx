import ProductCard from "../productCard";
import Heading2 from "../Heading2";
import { memo } from "react";

const TopProducts = ({text, products, isLoading}:{text:string, products:ProductCardType[], isLoading:boolean}) => {

  return (
    <div className="pt-2">
      <Heading2 text={text} />
      <div className="grid grid-cols-5 gap-2 max-[1160px]:grid-cols-4 max-[906px]:grid-cols-3 max-[660px]:grid-cols-2">
        {
          !isLoading? products.map((item, idx) => (
            <ProductCard data={item} key={idx} />
          )) : <p>Loading...</p>
        }
      </div>
    </div>
  );
};

export default memo(TopProducts);
