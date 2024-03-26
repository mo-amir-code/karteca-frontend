/// <reference types="redux-persist" />
import { combineReducers } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import appSlice from "@/redux/slices/app/appSlice"
import productsApi from "./queries/products/productsAPI";
import authApi from "./queries/auth/authAPI";
import authSlice from "./slices/auth/authSlice";
import userAPI from "./queries/user/userAPI";
import cartAPI from "./queries/cart/cartAPI";
import userSlice from "./slices/user/userSlice";


const appPersistConfig: PersistConfig<any> = {
    key: "app",
    storage
}

const authPersistConfig: PersistConfig<any> = {
    key: "auth",
    storage
}

const persistedAppReducer = persistReducer(appPersistConfig, appSlice.reducer);
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice.reducer);

const rootReducer = combineReducers({
    [appSlice.name]: persistedAppReducer,
    [authSlice.name]: persistedAuthReducer,
    [userSlice.name]: userSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [cartAPI.reducerPath]: cartAPI.reducer,
});


const persistConfig = {
    key: "root",
    storage,
    whitelist: [appSlice.name, authSlice.name]
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer