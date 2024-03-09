import React, { memo } from 'react'
import AddAddress from './AddAddress'
import Addresses from './Addresses'

const index = () => {
  

  return (
    <div className='space-y-8' >
        <AddAddress />
        <Addresses/> 
    </div>
  )
}

export default memo(index)