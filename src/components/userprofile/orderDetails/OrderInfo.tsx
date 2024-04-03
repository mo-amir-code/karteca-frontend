import Image from "next/image";
import pImg from "@/assets/productsImage/dummy2.png";
import OrderDeliveryInfo from "./OrderDeliveryInfo";
import DeliveryStatus from "./DeliveryStatus";
import PaymentInfo from "./PaymentInfo";
import { memo } from "react";
import { OrderDetailsType } from "@/redux/queries/order/orderTypes";

const OrderInfo = ({data}:{data:OrderDetailsType}) => {
  return (
    <div >
      {/* Order id area */}
      <div className="border-t p-2 bottom_to_top_ani">
        <span className="text-sm max-sm:text-xs text-gray-500">
          Order Id: {data._id.toUpperCase()}
        </span>
      </div>

      {/* Order details like title, description, delivery address and contact details */}
      <div>
        <div className="flex gap-4 w-full py-4 border-t">
          <div className="w-[150px] min-w-[150px] rounded-lg overflow-hidden">
            <Image src={data.product.thumbnail} alt={data.product.title} width={150} height={200} />
          </div>
          <div className="max-w-[600px] space-y-3 bottom_to_top_ani text-secondary-color ">
            <h2 className="font-medium max-sm:text-sm">{data.product.title}</h2>
            <p className="text-sm font-medium max-sm:text-xs">₹{data.purchasedPrice}</p>
            <p className="text-wrap text-sm max-sm:text-xs">{data.product.description}</p>
          </div>
        </div>
        <OrderDeliveryInfo deliveryData={data.deliveryAddress} />
      </div>

      {/* Delivery Status */}
      <DeliveryStatus status={data.deliveryStatus} />

      {/* Payment Information */}
      <PaymentInfo status={data.transaction.status} mode={data.paymentMode} quantity={data.quantity} total={data.totalAmount} />
    </div>
  );
};

export default memo(OrderInfo);
