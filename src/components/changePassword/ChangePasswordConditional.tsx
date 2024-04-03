"use client";
import React from "react";
import ChangePassword from ".";
import { useUserContext } from "@/context/UserContext";

const ChangePasswordConditional = () => {
  const { isChangePassword } = useUserContext();

  return <>{isChangePassword ? <ChangePassword /> : null}</>;
};

export default ChangePasswordConditional;
