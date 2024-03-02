"use client"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const Stars = ({stars, reviews}:{stars:number, reviews:number}) => {

    const starsRating = Array.from({length: 5}).map((item, index) => {
        if((index+1) < stars && (index+2) > stars) return <FaStarHalfAlt key={index} size={14} className="text-primary-color" />
        else if((index+1) == stars || (index+1) < stars) return <FaStar key={index} size={14} className="text-primary-color" />
        else return <CiStar key={index} size={14} /> 
    })

  return (
    <div className="flex items-center justify-center" >
        {starsRating}
        <span className="text-[12px] pl-1" >({reviews})</span>
   </div>
  )
}

export default Stars