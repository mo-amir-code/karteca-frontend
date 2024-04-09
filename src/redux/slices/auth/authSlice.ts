import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceType } from "./authTypes";
import { RootState } from "@/redux/store";
import { deleteCookie, setCookie } from "cookies-next";


const initialState = {
    isUserLoggedIn: false,
    loggedInUserId: null,
    loggedInUserName: null
} as AuthSliceType

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser(state, action){
            const {userId, name} = action.payload;
            state.isUserLoggedIn = true;
            state.loggedInUserId = userId;
            state.loggedInUserName = name;
            setCookie("isUserLoggedIn", true);
        },
        logoutUser(state, action){
            Object.assign(state, initialState);
            deleteCookie("isUserLoggedIn");
        }
    }
})

export const {loginUser, logoutUser} = authSlice.actions;
export const selectIsUserLoggedIn = (state: RootState) => state.auth.isUserLoggedIn;
export const selectLoggedInUserId = (state: RootState) => state.auth.loggedInUserId;
export const selectLoggedInUserName = (state: RootState) => state.auth.loggedInUserName;


export default authSlice;