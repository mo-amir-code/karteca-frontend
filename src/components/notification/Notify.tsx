"use client";
import { TiTick } from "react-icons/ti";
import { MdError } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";

const Notify = ({
  type,
  message,
}: {
  type: "success" | "error" | "pending";
  message: string;
}) => {
  return (
    <div
      style={{ borderColor: typeReturnColor(type) }}
      className="absolute border z-50 bg-white top-1/2 shadow-lg -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-lg px-3 py-4"
    >
      <div className="h-full flex flex-col items-center justify-between">
        <div>
          <div className="flex flex-col items-center justify-center">
            {returnIcon(type)}
            <span className="text-lg font-semibold">{type.toUpperCase()}</span>
          </div>
          <p className="text-center text-wrap text-secondary-color mt-3">
            {message}
          </p>
        </div>
        <button className="px-3 py-2 text-white rounded-md bg-primary-color">
          Okay 
        </button>
      </div>
    </div>
  );
};

const typeReturnColor = (type: string) => {
  switch (type) {
    case "success":
      return "#00b533";
    case "error":
      return "#DC2626";
    case "pending":
      return "#FFCC00";
    default:
      return;
  }
};

const returnIcon = (type: string) => {
  switch (type) {
    case "success":
      return <TiTick className="w-[50px] h-[50px] text-green-color" />;
    case "error":
      return <MdError className="w-[50px] h-[50px] text-red-color" />;
    case "pending":
      return (
        <MdOutlinePendingActions className="w-[50px] h-[50px] text-warning-color" />
      );
    default:
      return;
  }
};

export default Notify;
