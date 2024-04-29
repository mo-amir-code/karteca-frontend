import { createSlice } from "@reduxjs/toolkit";
import { PaymentSliceType } from "./paymentTypes";
import { RootState } from "@/redux/store";


const initialState: PaymentSliceType = {
    collectPaymentModal: {
        status: false,
        paymentQR: null
    },
    paymentModalInfo: {
        payableAmount: 0,
        transactionId: null
    },
    isFrom: null
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        updateCollectPaymentModal(state, action){
            state.collectPaymentModal = action.payload;
        },
        updatePaymentModalInfo(state, action){
            state.paymentModalInfo = action.payload;
        },
        updateIsFrom(state, action){
            state.isFrom = action.payload;
        },
    }
});

export const { updateCollectPaymentModal, updatePaymentModalInfo, updateIsFrom } = paymentSlice.actions;

export const selectCollectPaymentModal = (state: RootState) => state.payment.collectPaymentModal;
export const selectCollectPaymentModalInfo = (state: RootState) => state.payment.paymentModalInfo;
export const selectIsFrom = (state: RootState) => state.payment.isFrom;

export default paymentSlice