import { upiapp } from "@/data";
import Image from "next/image";
import React from "react";
import PaymentForm from "./PaymentForm";

const CollectPaymentContent = ({qrCode}:{qrCode:string}) => {
  return (
    <div className="fixed top-0 left-0 bg-black/50 z-40 w-full h-full flex items-center justify-center">
      <div className="bg-white space-y-4 flex flex-col justify-between overflow-y-auto rounded-md p-4 max-w-3xl w-full mx-4 min-h-[500px] border-t-4 border-primary-color shadow-md">
        <div className="space-y-4 flex-grow flex flex-col" >
        <div className="space-y-4" >
           <h1 className="text-2xl font-bold max-md:text-xl" >Payment With <span className="text-primary-color" >{process.env.NEXT_PUBLIC_COMPANY_NAME}</span></h1>
            <p className="text-sm max-md:text-xs font-medium text-secondary-color" >Scan the QR Code with any UPI App and pay the amount then enter UTR/Reference/Transaction_Id and then press Verify Payment button. </p>
        </div>
        <div className="flex-grow flex items-center justify-center" >
            <div className="space-y-2 " >
            <div className="flex justify-center h-[200px] max-md:h-[150px]" >
                <Image src={qrCode} alt="UPI Payment QR Code" width={200} height={200} className="max-md:w-[150px] max-md:h-[150px]" />
            </div>
            <div className="flex justify-center gap-2" >
            {
                upiapp.map((app, idx) => (
                    <Image key={idx} src={app.img} alt={app.name} width={70} className="max-md:w-[50px]" />
                ))
            }
            </div>
            </div>
        </div>
        </div>

        <PaymentForm />
      </div>
    </div>
  );
};

export default CollectPaymentContent;
