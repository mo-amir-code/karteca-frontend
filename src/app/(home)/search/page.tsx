import Loader from "@/components/loader/Loader";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

const withLoadingIndicator = (
  importComponent: () => Promise<{ default: ComponentType<any> }>
) =>
  dynamic(() => importComponent(), {
    loading: () => (
      <div className="w-full h-full">
        <Loader />
      </div>
    ),
  });

const Search = () => {
  return (
    <div className="space-y-6 max-md:space-y-0">
      <DynamicImports />
    </div>
  );
};

export async function generateMetadata() {
  return {
    title: "Karteca - Search Products",
    description: "Shop hassle free",
  };
}


export default Search;

const DynamicImports = withLoadingIndicator(() => import("./Imports"));
