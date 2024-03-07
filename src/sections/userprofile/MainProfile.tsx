import React from 'react'
import UserPersonalInfo from '@/components/userprofile/personalInfo'
import ManageAddresses from "@/components/userprofile/manageAddresses"
import Notifications from "@/components/userprofile/notifications"
import ReferDashboard from "@/components/userprofile/referDashboard"

const MainProfile = () => {
  return (
    <div className='flex-grow max-md:bg-tertiary-color bg-white rounded-lg py-4 px-6' >
      {/* <UserPersonalInfo /> */}
      {/* <ManageAddresses /> */}
      {/* <Notifications /> */}
      <ReferDashboard />
    </div>
  )
}

export default MainProfile