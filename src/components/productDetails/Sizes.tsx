import { sizes } from "@/data";
import { memo, useState } from "react";



const Sizes = () => {
    const [selectedSize, setSelectedSize] = useState<number>(sizes[0].size);
  
    return (
      <div className="flex items-center justify-start gap-2">
        {sizes.map((size, idx) => (
          <span
            onClick={() => setSelectedSize(size.size)}
            key={idx}
            className={`w-10 py-1 rounded-md smooth_transition ${
              selectedSize === size.size
                ? "shadow-md border-primary-color"
                : "hover:shadow-md border-transparent"
            } border text-center `}
          >
            {size.size}
          </span>
        ))}
      </div>
    );
  };

  export default memo(Sizes)