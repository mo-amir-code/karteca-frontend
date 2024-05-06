"use client";
import ButtonLoader from "@/components/loader/ButtonLoader";
import { APIRequestType } from "@/redux/RootTypes";
import { useActiveUpiMutation, useFetchAdminUpisQuery } from "@/redux/queries/admin/adminAPI";
import React, { useState } from "react";
import toast from "react-hot-toast";

type AdminUpiType = {
    name: string,
    upi: string,
    isActive: string,
    adminId: string
  }

const AdminUPI = () => {
  const { data } = useFetchAdminUpisQuery(null);
  const [activeUpi] = useActiveUpiMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleActiveUpi = async (adminId:string) => {

    if(!adminId){
        toast.error("Admin is missing");
        return;
    }

    try {

        setIsLoading(true);

        const { data } = await activeUpi({userId:adminId}) as { data:APIRequestType } 

        if(data?.success){
            toast.success(data.message);
        }else{
            toast.error('Something went wrong!');
        }
        
        setIsLoading(false)
    } catch (error) {
        toast.error('Something went wrong!');
        setIsLoading(false);
    }
  }

  return (
    <div className="w-full space-y-2">
      <h2 className="text-lg font-semibold ">Admins UPI ID</h2>
      <table className="w-full">
        <thead className="bg-primary-color text-white">
          <tr>
            <th>Name</th>
            <th>UPI ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.length? data?.data?.map((item:AdminUpiType) => (
            <tr key={item.adminId} className="text-sm text-black">
              <td className="text-center">{item.name}</td>
              <td className="text-center">{item.upi}</td>
              <td className="text-center">{item.isActive? "Yes" : "No"}</td>
              <td className="text-center "><button onClick={()=> handleActiveUpi(item.adminId)} className="px-3 py-1 rounded-full bg-primary-color text-white" >{isLoading? <ButtonLoader color /> : "Active Now"}</button></td>
            </tr>
          )) : "No data"}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUPI;
