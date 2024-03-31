import React from "react";
import Tags from "./Tags";

const TagsIndex = ({title}:{title:string}) => {

  return (
    <div className="p-3 rounded-lg bg-white space-y-2">
      <p className="font-semibold text-base font-lato text-secondary-color">{title}</p>
      <div className="flex items-center justify-start gap-2 flex-wrap">
        <Tags/>
      </div>
    </div>
  );
};

export default TagsIndex;

