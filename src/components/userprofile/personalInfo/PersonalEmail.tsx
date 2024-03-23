import React from "react";
import UserInputField from "../UserInputField";

const PersonalEmail = ({email}:{email:string}) => {
  return (
    <UserInputField fieldName="email" value={email} />
  );
};

export default PersonalEmail;
