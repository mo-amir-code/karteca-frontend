export interface PostOrderType {
  userId: string,
  paymentMode: "online" | "cash",
  orders: [PostOrderItemType]
}

export interface PostOrderItemType {
  product: string;
  purchasedPrice: number;
  color?: string;
  quantity: number;
  deliveryAddress: string;
  totalAmount: number;
}
