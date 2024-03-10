import { ComponentType } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/Loader";

const withLoadingIndicator = (
  importComponent: () => Promise<{ default: ComponentType<any> }>
) =>
  dynamic(() => importComponent(), {
    loading: () => <div className="w-full h-full" ><Loader /></div>,
  });

const ProductDetails = () => {
    return (
        <div className="px-4 space-y-4" >
          <DynamicImport />
        </div>
    )
}

export default ProductDetails

const DynamicImport = withLoadingIndicator(() => import("./Imports"));