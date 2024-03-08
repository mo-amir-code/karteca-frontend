import { memo } from "react"
import OrderInfo from "./OrderInfo"


const index = () => {
  return (
    <div>
        <OrderInfo />
    </div>
  )
}

export default memo(index)