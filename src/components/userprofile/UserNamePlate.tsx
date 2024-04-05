import UserName from "./UserName"


const UserNamePlate = () => {
  return (
    <div className="flex rounded-lg max-md:bg-tertiary-color bg-white p-2 gap-2" >
        <div className="w-11 h-11 rounded-full bg-primary-color" >

        </div>
        <div className="flex flex-col justify-between py-[3px]" >
            <span className="text-[11px]" >Hello,</span>
            <UserName />
        </div>
    </div>
  )
}

export default UserNamePlate