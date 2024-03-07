"use client";
import MaxWidthLayout from "@/HOC/MaxWidthLayout";
import Header from "@/sections/header/Header";
import MobileHeader from "@/sections/header/MobileHeader";
import MobileNavbar from "@/sections/navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <MobileHeader />
        <main className="my-4 max-md:my-2 max-w-7xl mx-auto max-md:pb-[60px]">
          <MaxWidthLayout>{children}</MaxWidthLayout>
        </main>
        <MobileNavbar />
      </Provider>
    </>
  );
}

export default HomeLayout;
