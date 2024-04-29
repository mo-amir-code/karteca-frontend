"use client";
import React from "react";
import CollectPaymentContent from "./CollectPaymentContent";
import { useAppSelector } from "@/redux/hooks";
import { selectCollectPaymentModal } from "@/redux/slices/payment/paymentSlice";

const Index = () => {
    const collectPaymentModal = useAppSelector(selectCollectPaymentModal);

  return (collectPaymentModal?.status && collectPaymentModal.paymentQR)? <CollectPaymentContent qrCode={collectPaymentModal.paymentQR} /> : null
};

export default Index;
