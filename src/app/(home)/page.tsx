import MaxWidthLayout from '@/HOC/MaxWidthLayout'
import Categories from '@/components/categories'
import FooterBanner from '@/components/footerBanner/FooterBanner'
import HeroSlider from '@/components/heroSlider'
import TopProducts from '@/components/topProducts'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-3' >
      <MaxWidthLayout children={<HeroSlider />} />
      <MaxWidthLayout children={<Categories />} />
      <MaxWidthLayout children={<TopProducts text='Top Products' />} />
      <MaxWidthLayout children={<TopProducts text='Best Smartwatch' />} />
      <MaxWidthLayout children={<TopProducts text='First Choice Earphones' />} />
      <MaxWidthLayout children={<FooterBanner/>} />
    </div>
  )
}

export default page