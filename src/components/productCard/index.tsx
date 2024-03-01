import Image from "next/image";
import product from "@/assets/productsImage/dummy2.png";

const ProductCard = () => {
  return (
    <div>
      <div className="max-w-[216px] bg-white p-2 rounded-xl smooth_transition hover:shadow-md">
        <div className="w-[200px] rounded-lg overflow-hidden">
          <Image src={product} alt="product image" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
