"use client"
import { APIRequestType } from "@/redux/RootTypes";
import { useFlushRedisMutation } from "@/redux/queries/admin/adminAPI"
import toast from "react-hot-toast";

const FlushRedis = () => {
  const [flushCachedData] = useFlushRedisMutation();


    const handleFlush = async () => {
        try {
          const {data, error} = await flushCachedData(null) as { data:APIRequestType, error: { data:APIRequestType } }

          if(data?.success){
            toast.success(data.message);
          }

          if(error?.data?.success === false){
            toast.error(error?.data?.message);
          }

        } catch (error) {
          console.error(error);
          toast.error("Something went wrong!");
        }
    }

  return (
    <button onClick={()=> handleFlush()} className="px-3 py-[6px] rounded-sm text-white bg-primary-color" >Flush Redis</button>
  )
}

export default FlushRedis
