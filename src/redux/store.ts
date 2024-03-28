import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistedReducer from "./persist";
import productsAPI from "./queries/products/productsAPI";
import authApi from "./queries/auth/authAPI";
import userAPI from "./queries/user/userAPI";
import cartAPI from "./queries/cart/cartAPI";
import orderAPI from "./queries/order/orderAPI";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      productsAPI.middleware,
      authApi.middleware,
      userAPI.middleware,
      cartAPI.middleware,
      orderAPI.middleware
    ]),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
