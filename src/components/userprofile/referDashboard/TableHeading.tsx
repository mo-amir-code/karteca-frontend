import MobileWallet from '@/components/buttons/MobileWallet'
import React from 'react'

const TableHeading = ({isWallet, title, subline, amount}:{isWallet?:boolean, title:string, subline:string, amount?:number}) => {
  return (
    <div className='relative' >
        <h4 className='text-lg max-md:text-base font-bold' >{title}</h4>
        <p className='text-sm max-md:text-xs' >{subline}</p>
        {isWallet && <div className='absolute top-1/2 -translate-y-1/2 right-0' >
        <MobileWallet amount={amount?.toString() || "0"} />
        </div>}
    </div>
  )
}

export default TableHeading