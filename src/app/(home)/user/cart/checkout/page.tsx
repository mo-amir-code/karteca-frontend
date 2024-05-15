import FormArea from "@/components/checkout/FormArea";
import PaymentArea from "@/components/checkout/PaymentArea";
// import CollectPayment from "@/components/collectPayment"


const Checkout = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto w-full">
      <div className="w-full flex justify-center py-8 max-lg:flex-col max-lg:justify-start max-lg:gap-8">
        <FormArea />
        <PaymentArea />
      </div>
    </div>
    {/* <CollectPayment /> */}
    </>
  );
};

export async function generateMetadata() {
  return {
    title: "Karteca - Checkout",
    description: "Buy now with multiple payment options",
  };
}

export default Checkout;
