import React from 'react'
import TableHeading from '../../referDashboard/TableHeading'
import WIthdrawalForm from './WIthdrawalForm'

const Index = ({ amount }:{ amount: number }) => {
  return (
    <div className='space-y-4' >
        <TableHeading title='Withdrawal Money' subline='Withdrawal money to your upi id' />
        <WIthdrawalForm currentEarning={amount} />
    </div>
  )
}

export default Index
