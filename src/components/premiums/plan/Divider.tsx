import React from 'react'

const Divider = () => {
  return (
    <div className='flex items-center justify-between' >
        <span className='w-[35%] h-[2px] bg-gradient-to-r rounded-full from-transparent to-primary-color' />
        <span className='w-2 h-2 rounded-full bg-primary-color' />
        <span className='w-[35%] h-[2px] bg-gradient-to-l  rounded-full from-transparent to-primary-color' />
    </div>
  )
}

export default Divider
