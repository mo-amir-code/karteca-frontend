"use client"
import React, { useState } from 'react'
import TransactionVerifyForm from '../forms/TransactionVerifyForm';

const SelectStatus = ({ selectedValue, utrId, isFrom }:{selectedValue:string, utrId: string, isFrom: string}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>(selectedValue);

    const handleOnChange = (e:any) => {
        setSelected(e.target.value);
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
    {isModalOpen && <TransactionVerifyForm status={selected} utrId={utrId} isFrom={isFrom} setIsModalSelected={setIsModalOpen} />}
    </>
  )
}

export default SelectStatus
