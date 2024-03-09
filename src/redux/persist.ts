/// <reference types="redux-persist" />
import { combineReducers } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import appSlice from "@/redux/app/appSlice"


const appPersistConfig: PersistConfig<any> = {
    key: "app",
    storage
}

const persistedAppReducer = persistReducer(appPersistConfig, appSlice);

const rootReducer = combineReducers({
    app:persistedAppReducer
});


const persistConfig = {
    key: "root",
    storage
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer