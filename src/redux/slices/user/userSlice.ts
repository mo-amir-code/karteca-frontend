import { createSlice } from "@reduxjs/toolkit";
import { UserSliceType } from "./userTypes";
import { RootState } from "@/redux/store";


const initialState = {
    cartItems: []
} as UserSliceType

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserCartItems(state, action){
            state.cartItems = action.payload;
        },
    }
});


export const {setUserCartItems} = userSlice.actions;

export const selectUserCartItems = (state: RootState) => state.user.cartItems;

export default userSlice;