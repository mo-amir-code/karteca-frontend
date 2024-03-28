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
    product: {
        _id:string,
        title: string,
        thumbnail: string,
        price: number,
        specifications: object
    }
}