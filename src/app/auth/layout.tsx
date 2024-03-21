import Image from "next/image";
import authBg from "@/assets/auth/authbg.jpg"
import Link from "next/link";
import Heading from "@/components/auth/Heading";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="max-w-5xl w-full mx-auto py-12 px-4">
      <div className="w-full h-[80vh] overflow-hidden flex bg-white rounded-lg shadow-lg">
        <div className="flex-grow max-md:hidden overflow-hidden rounded-l-lg">
          <Image src={authBg} alt="sigin" className="object-cover h-full" />
        </div>
        <div className="w-[2200px] hide_scrollbar overflow-y-auto px-8 py-8 flex items-start justify-center">
          <div className="flex flex-col justify-center w-full gap-12">
            <div className="">
              <h1 className="font-bold font-teko text-4xl text-secondary-color max-md:text-3xl">
                Welcome to <Link href={"/"} className="text-primary-color">PayKart</Link>
              </h1>
              <Heading />
            </div>
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default layout;
