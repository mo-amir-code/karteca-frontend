"use client";
import { useUserContext } from "@/context/UserContext";
import React, { useCallback } from "react";
import { IoCash } from "react-icons/io5";
import { PiContactlessPaymentFill } from "react-icons/pi";

const PaymentMode = () => {
  const {selectedPaymentMode, dispatch} = useUserContext();

  const handlePaymentModeChange = useCallback(
    (value: "cash" | "online") => {
      dispatch({type: "selectPaymentMode", payload: value});
    },
    [selectedPaymentMode]
  );

  return (
    <div className="radio-inputs">
      <label>
        <input
          onChange={() => handlePaymentModeChange("online")}
          className="radio-input"
          type="radio"
          name="engine"
          checked={selectedPaymentMode === "online"}
        />
        <span className="radio-tile">
          <span className="radio-icon">
            <PiContactlessPaymentFill />
          </span>
          <span className="radio-label">Online</span>
        </span>
      </label>
      <label>
        <input
          onChange={() => handlePaymentModeChange("cash")}
          className="radio-input"
          type="radio"
          name="engine"
          checked={selectedPaymentMode === "cash"}
        />
        <span className="radio-tile selectedMode">
          <span className="radio-icon">
            <IoCash />
          </span>
          <span className="radio-label">Cash</span>
        </span>
      </label>
    </div>
  );
};

export default PaymentMode;
