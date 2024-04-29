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
    isFrom?: "subscription" | "shopping"
}

export interface VerifyPaymentRequestType{
    userId: string;
    transactionId: string;
    amount: number;
    isFrom?: "subscription" | "shopping"
}

export interface CancelPaymentType{
    transactionId: string
}

export interface CreateSubscriptionType{
    userId: string,
    type: "basic" | "pro" | "premium",
    amount: number
  }