import { ReactNode } from "react"
import UserContextProvider from "./UserContext"


const index = ({children}:{children: ReactNode}) => {
  return (
    <UserContextProvider>
        {children}
    </UserContextProvider>
  )
}

export default index
