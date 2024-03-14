/// <reference types="redux-persist" />
import { combineReducers } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import appSlice from "@/redux/slices/app/appSlice"
import productsApi from "./queries/products/productsAPI";


const appPersistConfig: PersistConfig<any> = {
    key: "app",
    storage
}

const persistedAppReducer = persistReducer(appPersistConfig, appSlice.reducer);

const rootReducer = combineReducers({
    [appSlice.name]:persistedAppReducer,
    [productsApi.reducerPath]: productsApi.reducer
});

export default rootReducer