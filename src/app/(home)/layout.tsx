import Header from "@/sections/header/Header";
import MobileHeader from "@/sections/header/MobileHeader";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-md:h-screen max-md:overflow-hidden max-md:overflow-y-auto">
      <div>
        <Header />
        <MobileHeader />
        <main className="my-4 max-md:my-2 max-w-7xl mx-auto">{children}</main>
      </div>
    </div>
  );
}

export default HomeLayout;
