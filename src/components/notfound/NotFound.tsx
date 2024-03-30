import Image from "next/image";
import notfound from "@/assets/404/notfound.svg";
import Link from "next/link";

const NotFound = ({ msg = "Page Not Found" }: { msg?: string }) => {
  return (
      <div className="flex flex-col items-center justify-center" >
        <Image src={notfound} alt="Not found" className="w-[400px] max-md:w-[300px] max-sm:w-[200px]" />
        <span className="max-md:text-sm">{msg}</span>
        <Link href={"/"} className="px-4 py-[6px] rounded-md bg-primary-color text-white text-sm md:hover:shadow-lg smooth_transition font-semibold mt-2">
          Go Home
        </Link>
      </div>
  );
};

export default NotFound;
