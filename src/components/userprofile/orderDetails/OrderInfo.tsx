import Image from "next/image";
import pImg from "@/assets/productsImage/dummy2.png";
import OrderDeliveryInfo from "./OrderDeliveryInfo";
import DeliveryStatus from "./DeliveryStatus";
import PaymentInfo from "./PaymentInfo";

const OrderInfo = () => {
  return (
    <div >
      {/* Order id area */}
      <div className="border-t p-2">
        <span className="text-sm text-gray-500">
          Order Id: HYTF6789FGHJ45F6H7D20KH7
        </span>
      </div>

      {/* Order details like title, description, delivery address and contact details */}
      <div>
        <div className="flex gap-4 w-full py-4 border-t">
          <div className="w-[150px] min-w-[150px] rounded-lg overflow-hidden">
            <Image src={pImg} alt="order details" />
          </div>
          <div className="max-w-[600px] space-y-3 text-secondary-color ">
            <h2 className="font-medium">Upcoming dhansu products</h2>
            <p className="text-sm font-medium">₹345</p>
            <p className="text-wrap text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              tenetur dolores assumenda eum quam dolorem maiores quidem quos
              doloremque obcaecati?
            </p>
          </div>
        </div>
        <OrderDeliveryInfo />
      </div>

      {/* Delivery Status */}
      <DeliveryStatus />

      {/* Payment Information */}
      <PaymentInfo />
    </div>
  );
};

export default OrderInfo;
