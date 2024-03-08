import { createSlice } from "@reduxjs/toolkit";
import { AppSliceType } from "./appTypes";
import { RootState } from "../store";

const initialState = {
    desktop:{
        profile: "profile"
    }
} as AppSliceType


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        setProfile(state, action){
            state.desktop.profile = action.payload.profile;
        }
    }
});

export const {setProfile} = appSlice.actions;
export const selectDesktop = (state: RootState) => state.app.desktop;

export default appSlice.reducer