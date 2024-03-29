import Script from "next/script";

interface RazorpayInstance {
  new(options: RazorpayOptions): Razorpay;
}

interface RazorpayOptions {
  key: string;
  image: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

interface Razorpay {
  createPayment(options: any): void;
  open(): void;
  destroy(): void;
  // Add other methods as needed
}

declare global {
  interface Window {
    Razorpay: RazorpayInstance;
  }
}

const Headers = () => {
  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Headers;
