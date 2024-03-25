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
    currentPrice: number,
    product: {
        title: string,
        thumbnail: string,
        specifications: object
    }
}