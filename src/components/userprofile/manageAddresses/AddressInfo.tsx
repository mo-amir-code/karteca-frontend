import { memo } from "react";
import AddressThreeDotAction from "./AddressThreeDotAction";
import { UserAddressType } from "@/redux/queries/user/userTypes";

const AddressInfo = ({data}:{data:UserAddressType}) => {
  return (
    <div className="p-3 text-sm max-md:text-xs">
      <div className="flex items-center justify-between">
        <span className="px-[6px] py-[1px] text-gray-500 bg-tertiary-color text-[10px] font-medium">
          {data.type.toUpperCase()}
        </span>
        <AddressThreeDotAction addressId={data._id!}  />
      </div>
      <div className="flex items-center gap-4 mt-2 font-medium">
        <span>{data.name}</span>
        <span>{data.phone}</span>
      </div>
      <div className="mt-3">
        {data.address} -{" "}
        <span className="font-medium">{data.postalCode}</span>
      </div>
    </div>
  );
};

export default memo(AddressInfo);
