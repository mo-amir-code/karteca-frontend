import { categories } from "@/data";
import Image from "next/image";
import sw from "@/assets/categories/smartwatch.png";

const Categories = () => {
  return (
    <div className="flex items-center bottom_to_top_ani justify-around p-4 max-sm:py-2 max-sm:px-0 shadow-md bg-white">
      {categories.map((item, idx) => (
        <div key={idx} className="flex cursor-pointer flex-col gap-1 items-center justify-center">
          <div className="w-12 max-sm:w-10 h-12 max-sm:h-10 max-[550px]:w-8 max-[550px]:h-8">
            <Image src={sw} alt="category" />
          </div>
          <span className="max-sm:text-sm max-[550px]:text-[10px]" >{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
