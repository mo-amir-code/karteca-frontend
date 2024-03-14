import { createSlice } from "@reduxjs/toolkit";
import { AppSliceType } from "./appTypes";
import { RootState } from "../../store";

const initialState = {
    desktop:{
        profile: "profile"
    },
    mobile:{
        isProfileMenuOpen: true 
    }
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
        }
    }
});

export const {setProfile, setMobileProfileMenu} = appSlice.actions;
export const selectDesktop = (state: RootState) => state.app.desktop;
export const selectMobile = (state: RootState) => state.app.mobile;

export default appSlice