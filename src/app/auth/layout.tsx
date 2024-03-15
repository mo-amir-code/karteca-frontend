import Image from "next/image";
import authBg from "@/assets/auth/authbg.jpg"
import Link from "next/link";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="max-w-5xl w-full mx-auto py-12 px-4">
      <div className="w-full flex bg-white rounded-lg shadow-lg">
        <div className="flex-grow max-md:hidden overflow-hidden rounded-l-lg">
          <Image src={authBg} alt="sigin" className="object-cover h-full" />
        </div>
        <div className="w-[2200px] px-8 py-16 flex items-center justify-center">
          <div className="flex flex-col justify-center w-full gap-12">
            <div className="">
              <h1 className="font-bold font-teko text-4xl text-secondary-color max-md:text-3xl">
                Welcome to <Link href={"/"} className="text-primary-color">PayKart</Link>
              </h1>
              <h2 className="font-medium text-xl italic text-secondary-color -mt-3 max-md:text-lg">
                Buy Smarter Today
              </h2>
            </div>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default layout;
