import React from 'react'
import { FaStar } from 'react-icons/fa6'

const RatingCard = ({avgRating}:{avgRating:number}) => {
  console.log(avgRating)
  return (
    <div className='flex gap-[2px] rounded-sm bg-green-color text-text-color items-center justify-center py-[2px] px-1 font-bold text-[12px]' >
        <span>{avgRating}</span>
        <FaStar size={10} />
    </div>
  )
}

export default RatingCard