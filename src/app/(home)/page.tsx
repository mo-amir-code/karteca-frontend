import MaxWidthLayout from "@/HOC/MaxWidthLayout";
import Categories from "@/components/categories";
import FooterBanner from "@/components/footerBanner/FooterBanner";
import HeroSlider from "@/components/heroSlider";
import TopProducts from "@/components/topProducts";
import React from "react";

const page = () => {
  return (
    <div className="space-y-3">
      <MaxWidthLayout>
        <Wrapper />
      </MaxWidthLayout>
    </div>
  );
};

const Wrapper = () => {
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

export default page;
