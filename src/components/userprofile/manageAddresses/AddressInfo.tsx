import { memo } from "react";
import AddressThreeDotAction from "./AddressThreeDotAction";

const AddressInfo = () => {
  return (
    <div className="p-3 text-sm">
      <div className="flex items-center justify-between">
        <span className="px-[6px] py-[1px] text-gray-500 bg-tertiary-color text-[10px] font-medium">
          HOME
        </span>
        <AddressThreeDotAction  />
      </div>
      <div className="flex items-center gap-4 mt-2 font-medium">
        <span>Mo Amir</span>
        <span>6395212960</span>
      </div>
      <div className="mt-3">
        Mohalla Takiya, Aonla Road, Wazirganj, Uttar Pradesh -{" "}
        <span className="font-medium">243726</span>
      </div>
    </div>
  );
};

export default memo(AddressInfo);
