export interface RazorpayReponseType{
    razorpay_payment_id: string,
    razorpay_order_id: string,
    razorpay_signature: string
}

export interface VerifyPaymentType{  
  paymentStatus: "success" | "failed" | "pending" | "processing",
  // transactionId: string,
  utrId: string,
  adminNote: string,
  isFrom?: "subscription" | "shopping"
}

export interface VerifyPaymentRequestType{
    userId: string;
    transactionId: string;
    utrId: string,
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


export interface WithdrawalRequestType{
    userId: string,
    amount: number,
    upi: string
}