/// <reference types="redux-persist" />
import { combineReducers } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import appSlice from "@/redux/slices/app/appSlice"
import productsApi from "./queries/products/productsAPI";
import authApi from "./queries/auth/authAPI";


const appPersistConfig: PersistConfig<any> = {
    key: "app",
    storage
}

const persistedAppReducer = persistReducer(appPersistConfig, appSlice.reducer);

const rootReducer = combineReducers({
    [appSlice.name]:persistedAppReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer
});


const persistConfig = {
    key: "root",
    storage,
    whitelist: [appSlice.name]
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer