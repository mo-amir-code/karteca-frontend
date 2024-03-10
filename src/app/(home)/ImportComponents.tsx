import Categories from "../../components/categories";
import FooterBanner from "../../components/footerBanner/FooterBanner";
import HeroSlider from "../../components/heroSlider";
import TopProducts from "../../components/topProducts";


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