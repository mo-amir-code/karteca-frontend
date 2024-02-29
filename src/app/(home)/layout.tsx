import Header from "@/sections/Header";

function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-7xl overflow-hidden">
      <Header />
      <main className="my-4">{children}</main>
    </div>
  );
}

export default HomeLayout;
