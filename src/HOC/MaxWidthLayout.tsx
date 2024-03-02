import React, { ReactNode } from 'react'

const MaxWidthLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='max-w-[1200px] overflow-hidden mx-auto w-full px-2' >
        {children}
    </div>
  )
}

export default MaxWidthLayout