import Header from "@/sections/Header";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Header />
      <main className="my-4 max-md:my-2 max-w-7xl mx-auto overflow-hidden">{children}</main>
    </div>
  );
}

export default HomeLayout;
