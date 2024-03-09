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
            <Hero />
            <ProductSpecifications />
        </div>
    )
}

export default ProductDetails

const Hero = withLoadingIndicator(() => import("@/sections/productDetails/Hero"));
const ProductSpecifications = withLoadingIndicator(() => import("@/sections/productDetails/ProductSpecifications"));