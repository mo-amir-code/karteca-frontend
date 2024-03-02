import React from "react";
import Products from "./Products";
import Sidebar from "./Sidebar";

const Filter = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <div className="flex-[0.75]">
        <div className="flex items-center justify-between pb-2 px-1">
          <p className="text-xl text-secondary-color font-semibold font-poppins">
            Products 24
          </p>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Filter;
