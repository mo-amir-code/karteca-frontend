"use client"
import { useFlushRedisQuery } from "@/redux/queries/admin/adminAPI"
import { useState } from "react";

const FlushRedis = () => {
    const [isSkip, setIsSkip] = useState<boolean>(true);
    const { refetch } = useFlushRedisQuery(null, { skip:isSkip });


    const handleFlush = () => {
        setIsSkip(false)

        setTimeout(() => {
            refetch()
        }, 1000);
    }

  return (
    <button onClick={()=> handleFlush()} className="px-3 py-[6px] rounded-sm bg-primary-color" >Flush Redis</button>
  )
}

export default FlushRedis
