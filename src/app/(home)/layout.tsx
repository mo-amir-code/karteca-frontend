import Header from "@/sections/header/Header";
import MobileHeader from "@/sections/header/MobileHeader";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="max-md:h-screen max-md:overflow-hidden max-md:flex max-md:flex-col">
        <Header />
        <MobileHeader />
        <div className="max-md:overflow-y-auto flex-grow">
          <main className="my-4 max-md:my-2 max-w-7xl mx-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
