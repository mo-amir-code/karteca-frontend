import { FaAddressCard } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { RiEarthFill } from "react-icons/ri";
import { TbBuildingEstate, TbDialpadFilled } from "react-icons/tb";
import { TiUser } from "react-icons/ti";
import { LuNetwork } from "react-icons/lu";
import { BsGenderAmbiguous } from "react-icons/bs";
import { MdLockReset, MdHomeWork, MdNoteAlt, MdOutlinePassword, MdEmail } from "react-icons/md";
import { FaMoneyBills, FaMapLocationDot } from "react-icons/fa6";
import { IoIosQrScanner } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { MdTitle } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { IoMdPricetags } from "react-icons/io";
import { FaBoxes } from "react-icons/fa";
import { IoMdColorFill } from "react-icons/io";
import { BiSolidDiscount } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FaHighlighter } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiDeviceRecoverLine } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";



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
    required?: boolean | string;
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
              case "amount":
                return <FaMoneyBills size={20} />;
              case "price":
                return <IoMdPricetags size={20} />;
              case "cUpi":
                return <IoIosQrScanner size={20} />;
              case "upi":
                return <IoIosQrScanner size={20} />;
              case "note":
                return <MdNoteAlt size={20} />;
              case "utrId":
                return <GrTransaction size={20} />;
              case "title":
                return <MdTitle size={20} />;
              case "description":
                return <TbFileDescription size={20} />;
              case "stock":
                return <FaBoxes size={20} />;
              case "colors":
                return <IoMdColorFill size={20} />;
              case "discount":
                return <BiSolidDiscount size={20} />;
              case "importantNote":
                return <CgNotes size={20} />;
              case "highlights":
                return <FaHighlighter size={20} />;
              case "warrantyType":
                return <VscWorkspaceTrusted size={20} />;
              case "warrantyCover":
                return <RiDeviceRecoverLine size={20} />;
              case "category":
                return <BiSolidCategoryAlt size={20} />;
              case "subCategory":
                return <TbCategoryPlus size={20} />;
              default:0
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
        <span className="text-xs text-start block text-red-color" >{error?? null}</span>
      </div>
    );
  };

  export default InputField