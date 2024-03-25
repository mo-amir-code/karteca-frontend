import { ReactNode } from "react"
import UserContextProvider from "./UserContext"
import QueryContextProvider from "./QueryContext"


const index = ({children}:{children: ReactNode}) => {
  return (
    <UserContextProvider>
      <QueryContextProvider>
        {children}
      </QueryContextProvider>
    </UserContextProvider>
  )
}

export default index
