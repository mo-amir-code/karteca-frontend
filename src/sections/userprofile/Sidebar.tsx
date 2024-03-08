 

import dynamic from "next/dynamic"
const ProfilePath = dynamic(() => import("@/components/userprofile/ProfilePath"))
import UserNamePlate from "@/components/userprofile/UserNamePlate"
import { accountSettings, mystuffs } from "@/data"
import { memo } from "react"


const Sidebar = () => {
  return (
    <aside className="w-[300px] space-y-8 max-md:hidden" >
      <UserNamePlate />
      <div className="space-y-2 rounded-lg" >
        <ProfilePath title="My Orders" />
        <ProfilePath title="Refer Dashboard" />
        <ProfilePath title="Account Settings" list={accountSettings as [{name:string, path:string}]} />
        <ProfilePath title="My Stuff" list={mystuffs as [{name:string, path:string}]} />
      </div>
    </aside>
  )
}

export default memo(Sidebar)