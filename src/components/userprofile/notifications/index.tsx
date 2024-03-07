import Notification from "./Notification"


const index = () => {
  return (
    <div className="space-y-6" >
        <h4 className="font-medium" >Notifications</h4>
        <div>
        <Notification/>
        <Notification/>
        <Notification/>
        </div>
    </div>
  )
}

export default index