export interface PaymentSliceType{
    collectPaymentModal: {
        status: boolean,
        paymentQR: string | null
    },
    paymentModalInfo: {
        payableAmount: number,
        transactionId: string | null
    },
    isFrom: "subscription" | "shopping" | null
}