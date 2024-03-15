import MaxWidthLayout from "@/HOC/MaxWidthLayout";
import Header from "@/sections/header/Header";
import MobileHeader from "@/sections/header/MobileHeader";
import MobileNavbar from "@/sections/navbar";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="my-4 max-md:my-2 max-w-7xl mx-auto max-md:pb-[60px]">
        <MaxWidthLayout>{children}</MaxWidthLayout>
      </main>
      <MobileNavbar />
    </>
  );
}

export default HomeLayout;
