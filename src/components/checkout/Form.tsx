"use client"
import { useForm } from "react-hook-form";
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


const Form = () => {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormData>();

    const handleResetFormWithSubmit = (data:any) => {
        reset();
        console.log(data)
    }


    return (
        <form onSubmit={(handleSubmit((data: any) => handleResetFormWithSubmit(data)))} className="space-y-4" >
            <ContactInputField placeHolder="Full name" icon="name" type="text" register={register} />
            <ContactInputField placeHolder="Email" icon="email" type="email" register={register} />
            <ContactInputField placeHolder="Address" icon="address" type="text" register={register} />
            <div className="flex items-center max-sm:flex-col justify-center gap-2" >
                <ContactInputField placeHolder="Country" icon="country" type="text" register={register} />
                <ContactInputField placeHolder="State" icon="state" type="text" register={register} />
            </div>
            <ContactInputField placeHolder="City" icon="city" type="text" register={register} />
            <div className="flex items-center max-sm:flex-col justify-center gap-2" >
                <ContactInputField placeHolder="Postal Code" icon="postalCode" type="number" register={register} />
                <ContactInputField placeHolder="Mobile Number" icon="mobileNo" type="number" register={register} />
            </div>
            <button className="px-4 py-2 rounded-lg text-text-color bg-primary-color max-sm:text-base font-semibold shadow-lg hover:-translate-y-1 smooth_transition" >Submit</button>
        </form>
    )
}

export const ContactInputField = ({placeHolder, icon, type, register, required}:{placeHolder:string, icon:string, type:string, register?:any, required?:boolean}) => {
    return (
        <div className="w-full text-primary-color cursor-pointer flex-1 text-xl py-3 gap-2 border-2 border-secondary-color_3 px-2 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start" >
            {(():any=>{
                switch(icon){
                    case "name":
                        return <TiUser size={20} />;
                    case "phone":
                        return <TbDialpadFilled size={20} />
                    case "referredUserReferCode":
                        return <LuNetwork size={20} />
                    case "email":
                        return <MdEmail size={20} />
                    case "address":
                        return <FaAddressCard size={20} />
                    case "country":
                        return <RiEarthFill size={20} />
                    case "state":
                        return <TbBuildingEstate size={20} />
                    case "postalCode":
                        return <FaMapLocationDot size={20} />
                    case "city":
                        return <GiFamilyHouse size={20} />
                    case "mobileNo":
                        return <TbDialpadFilled size={20} />
                    case "password":
                        return <MdOutlinePassword size={20} />
                    case "gender":
                        return <BsGenderAmbiguous size={20} />
                    default:
                        console.log("something went wrong")
                }
            })()}
            <input type={type} {...register? {...register(icon, {required:required})} : null} className="text-base font-normal text-secondary-color bg-transparent outline-none group w-full" placeholder={placeHolder} />
        </div>
    )
}

export default Form