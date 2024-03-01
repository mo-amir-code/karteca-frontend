import Image from "next/image";
import product from "@/assets/productsImage/dummy2.png";

const ProductCard = () => {
  return (
    <div>
      <div className="max-w-[216px] max-[460px]:w-[176px] bg-white p-2 rounded-xl smooth_transition hover:shadow-md">
        <div className="w-[200px] max-[460px]:w-[160px] rounded-lg overflow-hidden">
          <Image src={product} alt="product image" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
