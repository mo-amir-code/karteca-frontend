"use client"
import React from "react";
import Products from "./Products";
import Sidebar from "./Sidebar";

const Filter = () => {

  return (
    <div className="flex justify-between gap-4">
      {/* Big device filter */}
      <Sidebar />
      {/* End big device filter */}
      <div className="flex-grow w-full">
        <Products />
      </div>
    </div>
  );
};

export default Filter;