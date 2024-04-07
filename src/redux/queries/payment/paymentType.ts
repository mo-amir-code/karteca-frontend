export interface RazorpayReponseType{
    razorpay_payment_id: string,
    razorpay_order_id: string,
    razorpay_signature: string
}

export interface VerifyPaymentType{
    orderId: string,
    paymentId: string,
    signature: string,
    transactionId: string,
    isFrom?: "refer" | "main"
}