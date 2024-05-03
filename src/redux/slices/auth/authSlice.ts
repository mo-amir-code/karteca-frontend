import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceType } from "./authTypes";
import { RootState } from "@/redux/store";
import { deleteCookie, setCookie } from "cookies-next";


const initialState = {
    isUserLoggedIn: false,
    loggedInUserId: null,
    loggedInUserName: null,
    loggedInUserRole: null
} as AuthSliceType

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser(state, action){
            const {userId, name, role} = action.payload;
            state.isUserLoggedIn = true;
            state.loggedInUserId = userId;
            state.loggedInUserName = name;
            state.loggedInUserRole = role;
            setCookie("isUserLoggedIn", true, { maxAge: 4 * 24 * 60 * 60 });
            setCookie("loggedInUserRole", role, { maxAge: 4 * 24 * 60 * 60 });
        },
        logoutUser(state){
            Object.assign(state, initialState);
            deleteCookie("isUserLoggedIn");
            deleteCookie("loggedInUserRole");
        }
    }
})

export const {loginUser, logoutUser} = authSlice.actions;
export const selectIsUserLoggedIn = (state: RootState) => state.auth.isUserLoggedIn;
export const selectLoggedInUserId = (state: RootState) => state.auth.loggedInUserId;
export const selectLoggedInUserName = (state: RootState) => state.auth.loggedInUserName;
export const selectUserRole = (state: RootState) => state.auth.loggedInUserRole;


export default authSlice;