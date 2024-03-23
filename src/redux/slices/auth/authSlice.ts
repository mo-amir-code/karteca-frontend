import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceType } from "./authTypes";
import { RootState } from "@/redux/store";


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
        },
        logoutUser(state, action){
            Object.assign(state, initialState);
        }
    }
})

export const {loginUser, logoutUser} = authSlice.actions;
export const selectIsUserLoggedIn = (state: RootState) => state.auth.isUserLoggedIn;
export const selectLoggedInUserId = (state: RootState) => state.auth.loggedInUserId;
export const selectLoggedInUserName = (state: RootState) => state.auth.loggedInUserName;


export default authSlice;