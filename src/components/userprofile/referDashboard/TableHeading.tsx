import React from 'react'
import Button from './Button'

const TableHeading = ({isWallet, title, subline, amount}:{isWallet?:boolean, title:string, subline:string, amount?:number}) => {
  return (
    <div className='relative' >
        <h4 className='text-lg max-md:text-base font-bold' >{title}</h4>
        <p className='text-sm max-md:text-xs' >{subline}</p>
        {isWallet && <div className='absolute top-1/2 -translate-y-1/2 right-0' ><Button /></div>}
    </div>
  )
}

export default TableHeading