import { createSlice } from "@reduxjs/toolkit";
import { AppSliceType } from "./appTypes";
import { RootState } from "../../store";

const initialState = {
    desktop:{
        profile: "profile"
    },
    mobile:{
        isProfileMenuOpen: true,
        searchTag: null
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
        setSearchTag(state, action){
            state.mobile.searchTag = action.payload;
        },
    }
});

export const {setProfile, setMobileProfileMenu, setPaymentStatusPage, setSearchTag} = appSlice.actions;
export const selectDesktop = (state: RootState) => state.app.desktop;
export const selectMobile = (state: RootState) => state.app.mobile;
export const selectIsPaymentStatusPageEnable = (state: RootState) => state.app.isPaymentStatusPageEnable;
export const selectSearchTag = (state: RootState) => state.app.mobile.searchTag;

export default appSlice