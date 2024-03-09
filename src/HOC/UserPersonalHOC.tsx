"use client"
import { ReactNode, memo } from "react";

const UserPersonalHOC = ({children, title}:{children:ReactNode, title:string}) => {
  return (
    <div className="space-y-2 py-4">
      <div className="flex items-center gap-4">
        <h4 className="text-lg max-sm:text-sm font-medium text-secondary-color">
          {title}
        </h4>
        <span className="text-sm max-sm:text-xs font-medium text-blue-600 cursor-pointer">
          Edit
        </span>
      </div>
      {children}
    </div>
  );
};

export default memo(UserPersonalHOC);
