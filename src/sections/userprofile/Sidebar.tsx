import ProfilePath from "@/components/userprofile/ProfilePath"
import UserNamePlate from "@/components/userprofile/UserNamePlate"
import { accountSettings, mystuffs, payments } from "@/data"


const Sidebar = () => {
  return (
    <aside className="w-[300px] space-y-8 max-md:hidden" >
      <UserNamePlate />
      <div className="space-y-2 rounded-lg" >
        <ProfilePath title="My Orders" />
        <ProfilePath title="Referral Dashboard" />
        <ProfilePath title="Account Settings" list={accountSettings as [{name:string, path:string}]} />
        <ProfilePath title="Payments" list={payments as [{name:string, path:string}]} />
        <ProfilePath title="My Stuff" list={mystuffs as [{name:string, path:string}]} />
      </div>
    </aside>
  )
}

export default Sidebar