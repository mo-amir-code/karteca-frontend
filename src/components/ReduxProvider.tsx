"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store, persistedStore } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import ContextProvider from "@/context";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <ContextProvider>{children}</ContextProvider>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
