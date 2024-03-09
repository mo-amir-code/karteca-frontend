import { ComponentType } from "react";
import Loader from "../loader/Loader";
import dynamic from "next/dynamic";

const withLoadingIndicator = (
  importComponent: () => Promise<{ default: ComponentType<any> }>
) =>
  dynamic(() => importComponent(), {
    loading: () => <Loader />,
  });

const ImportComponents = () => {
  return (
    <>
      <HeroSlider />
      <Categories />
      <TopProducts text="Top Products" />
      <TopProducts text="Best Smartwatch" />
      <TopProducts text="First Choice Earphones" />
      <FooterBanner />
    </>
  );
};

export default ImportComponents;

const HeroSlider = withLoadingIndicator(() => import("@/components/heroSlider")); 
const Categories = withLoadingIndicator(() => import("@/components/categories"));
const FooterBanner = withLoadingIndicator(() => import("@/components/footerBanner/FooterBanner")); 
const TopProducts = withLoadingIndicator(() => import("@/components/topProducts")); 