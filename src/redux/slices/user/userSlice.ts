import { createSlice } from "@reduxjs/toolkit";
import { UserSliceType } from "./userTypes";
import { RootState } from "@/redux/store";


const initialState = {
    cartItems: [],
    wishlistItems: []
} as UserSliceType

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserCartItems(state, action){
            state.cartItems = action.payload;
        },
        setUserWishlistItems(state, action){
            state.wishlistItems = action.payload;
        },
    }
});


export const {setUserCartItems, setUserWishlistItems} = userSlice.actions;

export const selectUserCartItems = (state: RootState) => state.user.cartItems;
export const selectUserWishlistItems = (state: RootState) => state.user.wishlistItems;

export default userSlice;