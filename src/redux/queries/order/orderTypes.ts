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

export interface GetOrderType{
  _id: string;
  product:{
    title: string;
    thumbnail: string
  };
}

export interface OrderDetailsType{
  _id: string;
  product: OrderProductType;
  purchasedPrice: number;
  quantity: number;
  deliveryAddress: OrderDeliveryAddressType;
  deliveryStatus: "pending" | "dispatched" | "shipped" | "delivered";
  orderStatus: "successful" | "cancelled" | "processing";
  paymentMode: "cash" | "online";
  totalAmount: number;
  transaction: OrderTransactionType;
  createdAt: Date;
}

export interface OrderProductType{
  _id:string;
  title: string;
  thumbnail: string;
  description: string
}

export interface OrderDeliveryAddressType{
  name: string;
  email: string;
  address: string;
  state: string;
  city: string;
  postalCode: number;
  phone: number;
}

export interface OrderTransactionType{
  status: "pending" | "processing" | "failed" | "success";
  amount: number
}