/// <reference types="redux-persist" />
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"


const rootReducer = combineReducers({
    
});


const persistConfig = {
    key: "root",
    storage,
    whitelist: [""]
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
export {persistedReducer}