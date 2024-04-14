import Script from "next/script";

interface RazorpayInstance {
  new (options: RazorpayOptions): Razorpay;
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
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6EKRN7BPLY"
      />
      <Script id="google-analytics" >
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
  
           gtag('config', 'G-6EKRN7BPLY');
        `}
      </Script>
    </>
  );
};

export default Headers;
