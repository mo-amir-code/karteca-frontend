import MobileWallet from '@/components/buttons/MobileWallet'
import React from 'react'

const TableHeading = ({isWallet, title, subline}:{isWallet?:boolean, title:string, subline:string}) => {
  return (
    <div className='relative' >
        <h4 className='text-lg max-md:text-base font-bold' >{title}</h4>
        <p className='text-sm max-md:text-xs' >{subline}</p>
        {isWallet && <div className='absolute top-1/2 -translate-y-1/2 right-0' >
        <MobileWallet amount='234' />
        </div>}
    </div>
  )
}

export default TableHeading