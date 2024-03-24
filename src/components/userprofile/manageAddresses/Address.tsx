"use client"
import { useUserContext } from "@/context/UserContext";
import AddressForm from "./AddressForm"
import AddressInfo from "./AddressInfo"
import { UserAddressType } from "@/redux/queries/user/userTypes";


const Address = ({data, isFirst}:{data: UserAddressType, isFirst?:boolean}) => {
  const {isAddressEdit, setIsAddressEdit} = useUserContext();

  return (
    <div className={`border ${!isFirst && "border-t-0"} select-none`} >
      {
        isAddressEdit === data._id? <AddressForm data={data} /> : <AddressInfo data={data} />
      }
    </div>
  )
}

export default Address