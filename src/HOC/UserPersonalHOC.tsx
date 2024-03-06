"use client"
import { ReactNode, memo } from "react";

const UserPersonalHOC = ({children}:{children:ReactNode}) => {
  return (
    <div className="space-y-2 py-4">
      <div className="flex items-center gap-4">
        <h4 className="text-lg font-medium text-secondary-color">
          Mobile Number
        </h4>
        <span className="text-sm font-medium text-blue-600 cursor-pointer">
          Edit
        </span>
      </div>
      {children}
    </div>
  );
};

export default memo(UserPersonalHOC);
