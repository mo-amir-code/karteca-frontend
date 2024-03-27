import { ReactNode } from "react"
import UserContextProvider from "./UserContext"
import QueryContextProvider from "./QueryContext"
import ProductContextProvider from "./ProductContext"


const index = ({children}:{children: ReactNode}) => {
  return (
    <UserContextProvider>
      <QueryContextProvider>
        <ProductContextProvider>
        {children}
        </ProductContextProvider>
      </QueryContextProvider>
    </UserContextProvider>
  )
}

export default index
