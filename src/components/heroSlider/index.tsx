"use client"
import React from 'react'
import Slider, { Settings } from "react-slick"
import "./slider.css"
import { sliderData } from '@/data'
import Image from 'next/image'

const HeroSlider = () => {
    
    const settings:Settings = {
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  return (
    <div className='w-full' >
        <Slider {...settings} >
            {sliderData.map((item, idx) => <div key={idx} ><Image src={item.link} alt={item.title} /></div>)}
        </Slider>
    </div>
  )
}

export default HeroSlider