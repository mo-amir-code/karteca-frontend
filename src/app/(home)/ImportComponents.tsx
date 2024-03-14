"use client"
import Categories from "../../components/categories";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import HeroSlider from "../../components/heroSlider";
import TopProducts from "../../components/topProducts";


const ImportComponents = () => {
  


  return (
    <>
      <HeroSlider />
      <Categories />
      <TopProducts products={[]} text="Top Products" />
      <TopProducts products={[]} text="Best Smartwatch" />
      <TopProducts products={[]} text="First Choice Earphones" />
      <FooterBanner />
    </>
  );
};

export default ImportComponents;