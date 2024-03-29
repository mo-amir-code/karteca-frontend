import { createSlice } from "@reduxjs/toolkit";
import { AppSliceType } from "./appTypes";
import { RootState } from "../../store";

const initialState = {
    desktop:{
        profile: "profile"
    },
    mobile:{
        isProfileMenuOpen: true 
    },
    isPaymentStatusPageEnable: false
} as AppSliceType


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        setProfile(state, action){
            state.desktop.profile = action.payload.profile;
        },
        setMobileProfileMenu(state, action){
            state.mobile.isProfileMenuOpen = action.payload.isProfileMenuOpen;
        },
        setPaymentStatusPage(state, action){
            state.isPaymentStatusPageEnable = action.payload;
        },
    }
});

export const {setProfile, setMobileProfileMenu, setPaymentStatusPage} = appSlice.actions;
export const selectDesktop = (state: RootState) => state.app.desktop;
export const selectMobile = (state: RootState) => state.app.mobile;
export const selectIsPaymentStatusPageEnable = (state: RootState) => state.app.isPaymentStatusPageEnable;

export default appSlice