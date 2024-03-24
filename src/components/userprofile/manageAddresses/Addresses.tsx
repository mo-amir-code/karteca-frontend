"use client"
import { useGetUserAddressessQuery } from "@/redux/queries/user/userAPI"
import Address from "./Address"
import { useAppSelector } from "@/redux/hooks"
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice"
import toast from "react-hot-toast"
import FullLoader from "@/components/loader/FullLoader"
import { UserAddressType } from "@/redux/queries/user/userTypes"


const Addresses = () => {
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const {isLoading, data, isSuccess, isError} = useGetUserAddressessQuery(loggedInUserId as string);


  if(isError){
    toast.error("Something Error Happened");
  }

  if(isLoading){
    return <FullLoader />
  }


  return (
    <div>
      {isSuccess? data.data.map((item:UserAddressType, idx:number) => <Address data={item} key={item._id} isFirst={idx===0?true:false} />) : "Error"}
    </div>
  )
}

export default Addresses