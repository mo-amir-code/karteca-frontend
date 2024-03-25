export interface APICartType{
    userId: string,
    product: string,
    color?: string,
    discount: number,
    quantity: number,
    currentPrice: number,
    totalAmount: number,
}