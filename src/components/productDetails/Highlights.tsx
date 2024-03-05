import { productHighlights } from "@/data";
import { BsStars } from "react-icons/bs";

const Highlights = () => {
  return (
    <ul className="space-y-1">
      {productHighlights.map((highlight, idx) => (
        <li key={idx} className="flex items-center text-sm gap-1">
          <BsStars size={14} className="text-primary-color" />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
};

export default Highlights;
