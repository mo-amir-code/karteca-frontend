import React from 'react'
import Title from './Title'
import Pricing from './Pricing'
import BuyNow from './BuyNow'
import Divider from './Divider'
import Includes from './Includes'

const Index = () => {
  return (
    <div className='max-w-[360px] space-y-4 mx-auto p-4 bg-white rounded-lg shadow-lg border border-primary-color shadow-primary-color' >
        <Title />
        <Pricing />
        <BuyNow />
        <Divider />
        <Includes />
    </div>
  )
}

export default Index
