import MaxWidthLayout from '@/HOC/MaxWidthLayout'
import Categories from '@/components/categories'
import HeroSlider from '@/components/heroSlider'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-3' >
      <MaxWidthLayout children={<HeroSlider />} />
      <MaxWidthLayout children={<Categories />} />
    </div>
  )
}

export default page