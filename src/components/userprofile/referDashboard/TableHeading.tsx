import React from 'react'
import Buttons from './Buttons'

const TableHeading = ({isWallet, title, subline}:{isWallet?:boolean, title:string, subline:string, amount?:number}) => {
  return (
    <div className='relative' >
        <h4 className='text-lg max-md:text-base font-bold' >{title}</h4>
        <p className='text-sm max-md:text-xs' >{subline}</p>
        <div className='absolute top-1/2 -translate-y-1/2 right-0' ><Buttons title={title} isWallet={isWallet} /></div>
    </div>
  )
}

export default TableHeading