import React from 'react'
import ButtonLoader from '../loader/ButtonLoader';

const Button = ({ name, isLoading }: { name: string; isLoading?:boolean }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="submit"
        className="px-8 h-10 w-full gap-1 border-2 border-primary-color smooth_transition hover:shadow-lg py-2 flex items-center justify-center"
      >
        {
          isLoading? <div><ButtonLoader /></div> : <span className="text-lg max-md:text-sm font-medium">{name}</span> 
        }
      </button>
    </div>
  )
}

export default Button
