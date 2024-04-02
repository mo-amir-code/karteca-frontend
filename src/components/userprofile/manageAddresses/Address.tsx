"use client"
import { useUserContext } from "@/context/UserContext";
import AddressForm from "./AddressForm"
import AddressInfo from "./AddressInfo"
import { UserAddressType } from "@/redux/queries/user/userTypes";
import { memo, useEffect } from "react";


const Address = ({data, isFirst, isCheckout}:{data: UserAddressType, isFirst?:boolean, isCheckout?:boolean}) => {
  const {isAddressEdit, selectedAddress, dispatch} = useUserContext();

  const handleSelectDeliveryAddress = () => {
    if(isCheckout) dispatch({type: "selectAddress", payload: data._id});
  }
  
  useEffect(() => {
    if(isFirst){
      dispatch({type: "selectAddress", payload: data._id});
    }
  }, []);

  return (
    <div onClick={()=>handleSelectDeliveryAddress()} className={`border ${isCheckout && "cursor-pointer"} bottom_to_top_ani smooth_transition ${(!isFirst && selectedAddress !== data._id) && "border-t-transparent"} ${(isCheckout && selectedAddress === data._id)? "border-primary-color" : null} select-none`} >
      {
        isAddressEdit === data._id? <AddressForm data={data} /> : <AddressInfo data={data} />
      }
    </div>
  )
}

export default memo(Address)