"use client"

import { usePathname } from "next/navigation";

const Heading = () => {
    const path = usePathname();

    const getByPath = (path:string) => { 
        const endpoint = path.split("/").at(-1);
        switch(endpoint){
            case "signup": return "Be A Part Of PayKart (Signup)"
            case "signin": return "Sigin Now"
            case "forgot-password": return "Send An OTP"
            case "reset-password": return "Change Password"
            case "verify": return "Verify Your Account"
            default: return "Buy Smarter Today"
        }
    }

  return (
    <h2 className="font-medium text-xl italic text-secondary-color -mt-3 max-md:text-lg">
      {getByPath(path)}
    </h2>
  );
};

export default Heading;
