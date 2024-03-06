import UserPersonalInfo from '@/components/userprofile/personalInfo'
import React from 'react'

const MainProfile = () => {
  return (
    <div className='flex-grow max-md:bg-tertiary-color bg-white rounded-lg py-4 px-6' >
      <UserPersonalInfo />
    </div>
  )
}

export default MainProfile