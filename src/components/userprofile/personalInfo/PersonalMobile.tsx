import React from "react";
import UserInputField from "../UserInputField";

const PersonalMobile = ({phone}:{phone:string}) => {
  return (
    <UserInputField fieldName="phone" value={phone} />
  );
};

export default PersonalMobile;
