"use client"
import { ReactNode } from "react"
import { Provider } from "react-redux"
import {store,persistedStore} from "@/redux/store"
import { PersistGate } from "redux-persist/integration/react"

const ReduxProvider = ({children}:{children:ReactNode}) => {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistedStore} >
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider