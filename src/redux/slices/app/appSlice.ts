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
    isPaymentStatusPageEnable: false,
    currentOrderId: null
} as AppSliceType


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        setProfile(state, action){
            if(action.payload.profile !== "orderDetails") state.currentOrderId = null;
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
        setCurrentOrderId(state, action){
            state.currentOrderId = action.payload;
        },
    }
});

export const {setProfile, setMobileProfileMenu, setPaymentStatusPage, setSearchTag, setCurrentOrderId} = appSlice.actions;
export const selectDesktop = (state: RootState) => state.app.desktop;
export const selectMobile = (state: RootState) => state.app.mobile;
export const selectIsPaymentStatusPageEnable = (state: RootState) => state.app.isPaymentStatusPageEnable;
export const selectSearchTag = (state: RootState) => state.app.mobile.searchTag;
export const selectCurrentOrderId = (state: RootState) => state.app.currentOrderId;

export default appSlice