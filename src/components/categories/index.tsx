import { categories } from "@/data";
import Image from "next/image";
import sw from "@/assets/categories/smartwatch.png";

const Categories = () => {
  return (
    <div className="flex items-center justify-around p-4 shadow-md bg-white">
      {categories.map((item) => (
        <div key={item.name} className="flex flex-col gap-1 items-center justify-center">
          <div className="w-12 h-12">
            <Image src={sw} alt="category" />
          </div>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
