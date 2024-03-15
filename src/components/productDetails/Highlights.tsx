import { BsStars } from "react-icons/bs";

const Highlights = ({highlights}:{highlights:string[]}) => {
  return (
    <ul className="space-y-[3px]">
      {highlights.map((highlight, idx) => (
        <li key={idx} className="flex items-start text-xs gap-1">
          <div className="w-[14px] h-[14px] pt-1" >
          <BsStars size={14} className="text-primary-color" />
          </div>
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
};

export default Highlights;
