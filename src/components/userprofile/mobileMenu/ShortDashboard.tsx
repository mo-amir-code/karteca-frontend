import React from 'react'
import Box from './Box'

const ShortDashboard = () => {
  return (
    <div className='grid grid-cols-2 gap-2' >
        <Box amount={104} message={"Withdrawal activated connections"} />
        <Box amount={32} message={"Withdrawal Locked connections"} />
        <Box amount={"₹51647"} message={"Total earned money"} />
        <Box amount={"₹5647"} message={"Total withdrawal money"} />
    </div>
  )
}

export default ShortDashboard