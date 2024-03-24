"use client"
import { useUserContext } from "@/context/UserContext";
import { APIRequestType } from "@/redux/RootTypes";
import { useDeleteUserAddressMutation } from "@/redux/queries/user/userAPI";
import { useState } from "react";
import toast from "react-hot-toast";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const AddressThreeDotAction = ({addressId}:{addressId:string}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {setIsAddressEdit} = useUserContext();
    const [deleteUserAddress] = useDeleteUserAddressMutation();

    const handleEdit = () => {
      setIsAddressEdit(addressId);
    }
    
    const handleDelete = async () => {
      const {data} = await deleteUserAddress({addressId}) as {data: APIRequestType};
      if(data?.success){
        toast.success("Address Deleted")
      }else{
        toast.error("Internal Error Occurred!");
      }
    }

  return (
    <div className="relative" >
        <PiDotsThreeVerticalBold size={20} onClick={()=>setIsOpen((prev) => !prev)} className="cursor-pointer" />
        {isOpen && <div style={{width: "max-content"}} className="absolute rounded-md top-full -left-[200%] w-full bg-white shadow-md" >
            <div className="flex flex-col py-2 px-3 text-sm" >
            <span onClick={()=>handleEdit()} className="cursor-pointer" >Edit</span>
            <span onClick={()=>handleDelete()} className="cursor-pointer" >Delete</span>
            </div>
        </div>}
    </div>

  )
};

export default AddressThreeDotAction;
