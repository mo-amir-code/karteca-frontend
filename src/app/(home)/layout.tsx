import Header from "@/sections/Header";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-md:h-screen max-md:overflow-hidden max-md:overflow-y-auto">
      <Header />
      <main className="my-4 max-md:my-2 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}

export default HomeLayout;