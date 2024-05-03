"use client"
import React, { useState } from 'react'
import WithdrawalVerificationForm from '../forms/WithdrawalVerificationForm';

const SelectWithdrawalStatus = ({ selectedValue, withdrawalRequestId }:{selectedValue: "success" | "failed" | "verified" | "pending" | "processing", withdrawalRequestId:string}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState< "success" | "failed" | "verified" | "pending" | "processing">(selectedValue);

    const handleOnChange = (e:any) => {
        setSelected(e.target.value as  "success" | "failed" | "verified" | "pending" | "processing");
        setIsModalOpen(true);
    }

  return (
    <>
    <select onChange={handleOnChange} defaultValue={selectedValue} className=' px-2 py-1 outline-none' >
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="success">Success</option>
        <option value="failed">Failed</option>
    </select>
    {isModalOpen && <WithdrawalVerificationForm status={selected} withdrawalRequestId={withdrawalRequestId} setIsModalSelected={setIsModalOpen} />}
    </>
  )
}

export default SelectWithdrawalStatus