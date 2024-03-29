export interface APICartType{
    userId: string,
    product: string,
    color?: string,
    discount: number,
    quantity: number,
    currentPrice: number,
    totalAmount: number,
}

export interface CartItemDataType{
    _id:string,
    quantity: number,
    totalAmount: number,
    discount: number,
    currentPrice: number,
    color: undefined | string,
    product: {
        _id:string,
        title: string,
        thumbnail: string,
        price: number,
        specifications: object
    }
}

export interface PaymentOrderType{
    key: string; 
    amount: number;
    currency: string; 
    name: string;
    orderId: string; 
    callback_url: string,
    prefill: {
        name: string,
        email: string,
        contact: string
    },
    theme: {
        color: string
    },
    transactionId: string
}