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
        <HeroSlider />
      </MaxWidthLayout>
      <MaxWidthLayout>
        <Categories />
      </MaxWidthLayout>
      <MaxWidthLayout>
        <TopProducts text="Top Products" />
      </MaxWidthLayout>
      <MaxWidthLayout>
        <TopProducts text="Best Smartwatch" />
      </MaxWidthLayout>
      <MaxWidthLayout>
        <TopProducts text="First Choice Earphones" />
      </MaxWidthLayout>
      <MaxWidthLayout>
        <FooterBanner />
      </MaxWidthLayout>
    </div>
  );
};

export default page;
