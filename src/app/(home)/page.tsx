import MaxWidthLayout from '@/HOC/MaxWidthLayout'
import HeroSlider from '@/components/heroSlider'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center' >
      <MaxWidthLayout children={<HeroSlider />} />
    </div>
  )
}

export default page