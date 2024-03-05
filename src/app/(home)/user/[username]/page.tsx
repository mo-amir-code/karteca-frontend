import MainProfile from '@/sections/userprofile/MainProfile'
import Sidebar from '@/sections/userprofile/Sidebar'
import React from 'react'

const UserProfile = () => {
  return (
    <div className='w-full flex gap-3' >
        <Sidebar/>
        <MainProfile />
    </div>
  )
}

export default UserProfile