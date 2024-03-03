import Header from "@/sections/header/Header";
import MobileHeader from "@/sections/header/MobileHeader";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="my-4 max-md:my-2 max-w-7xl mx-auto">{children}</main>
    </>
  );
}

export default HomeLayout;
