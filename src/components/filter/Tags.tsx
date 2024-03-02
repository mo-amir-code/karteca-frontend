import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Tags = ({title}:{title:string}) => {
  return (
    <div className="p-3 rounded-lg bg-white space-y-2">
      <p className="font-semibold text-base font-lato text-secondary-color">{title}</p>
      <div className="flex items-center justify-start gap-2 flex-wrap">
        <Tag text="20% & More" />
        <Tag text="New Arrivals" />
      </div>
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <div
      style={{ maxWidth: "max-content" }}
      className="flex items-center gap-2 justify-center font-lato font-medium text-secondary-color p-2 bg-tag-color rounded-sm hover:line-through smooth_transition text-xs"
    >
      <IoCloseOutline size={16} className="" />
      {text}
    </div>
  );
};

export default Tags;
