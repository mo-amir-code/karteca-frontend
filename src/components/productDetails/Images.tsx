import Image from "next/image";
import product from "@/assets/productsImage/dummy2.png";

const Images = () => {
  return (
    <div className="w-full flex max-sm:flex-col-reverse gap-2 smooth_transition">
      <div className="flex-[0.15] flex sm:flex-col items-center justify-between gap-1 overflow-y-auto">
        <div className="border-2 border-transparent hover:border-primary-color smooth_transition">
          <Image src={product} alt="product" className="cursor-pointer" />
        </div>
        <div className="border-2 border-transparent hover:border-primary-color smooth_transition">
          <Image src={product} alt="product" className="cursor-pointer" />
        </div>
        <div className="border-2 border-transparent hover:border-primary-color smooth_transition">
          <Image src={product} alt="product" className="cursor-pointer" />
        </div>
        <div className="border-2 border-transparent hover:border-primary-color smooth_transition">
          <Image src={product} alt="product" className="cursor-pointer" />
        </div>
        <div className="border-2 border-transparent hover:border-primary-color smooth_transition">
          <Image src={product} alt="product" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex-[0.85]">
        <Image src={product} alt="product" className="object-cover" />
      </div>
    </div>
  );
};

export default Images;
