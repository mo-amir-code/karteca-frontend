import { FaAddressCard } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { RiEarthFill } from "react-icons/ri";
import { TbBuildingEstate, TbDialpadFilled } from "react-icons/tb";
import { TiUser } from "react-icons/ti";
import { MdOutlinePassword } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { BsGenderAmbiguous } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { MdLockReset } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";


const InputField = ({
    placeHolder,
    icon,
    type,
    register,
    required,
    isCenter,
    error
  }: {
    placeHolder: string;
    icon: string;
    type: string;
    register?: any;
    required?: boolean;
    isCenter?: boolean;
    error?:string | null
  }) => {
    return (
      <div className="w-full" >
        <div className="w-full text-primary-color cursor-pointer flex-1 text-xl gap-2 border-2 border-secondary-color_3 py-3 px-2 max-md:py-2 max-md:px-1 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start">
          {((): any => {
            switch (icon) {
              case "name":
                return <TiUser size={20} />;
              case "phone":
                return <TbDialpadFilled size={20} />;
              case "referredUserReferCode":
                return <LuNetwork size={20} />;
              case "email":
                return <MdEmail size={20} />;
              case "address":
                return <FaAddressCard size={20} />;
              case "country":
                return <RiEarthFill size={20} />;
              case "state":
                return <TbBuildingEstate size={20} />;
              case "postalCode":
                return <FaMapLocationDot size={20} />;
              case "city":
                return <GiFamilyHouse size={20} />;
              case "mobileNo":
                return <TbDialpadFilled size={20} />;
              case "phone":
                return <TbDialpadFilled size={20} />;
              case "password":
                return <MdOutlinePassword size={20} />;
              case "confirmPassword":
                return <MdOutlinePassword size={20} />;
              case "newPassword":
                return <MdLockReset size={20} />;
              case "amount":
                return <FaMoneyBills size={20} />;
              case "otp":
                return <MdOutlinePassword size={20} />;
              case "type":
                return <MdHomeWork size={20} />;
              case "gender":
                return <BsGenderAmbiguous size={20} />;
              default:
                console.log("something went wrong");
            }
          })()}
          <input
            type={type}
            {...(register ? {...register(icon, { required: required }) } : null)}
            className={`text-base max-md:text-sm font-normal ${
              isCenter && "text-center"
            } text-secondary-color bg-transparent outline-none group w-full`}
            placeholder={placeHolder}
          />
        </div>
        <span className="text-xs text-red-color" >{error?? null}</span>
      </div>
    );
  };

  export default InputField