"use client"

import { useUserContext } from "@/context/UserContext"
import { memo, useEffect } from "react";

const UserInputField = ({value, fieldName}:{value:string, fieldName: "name" | "gender" | "email" | "phone"}) => {
  const state = useUserContext();

  useEffect(() => {
    state.dispatch({type: fieldName, payload: value});
  }, []);

  const handleValueChange = (newValue:string) => {
    state.dispatch({type:fieldName, payload: newValue});
  }


  return (
    <div className="w-full px-4 py-3 text-gray-500 text-sm bg-tertiary-color" >
        <input type="text" onChange={(e)=>handleValueChange(e.target.value)} value={state[fieldName] !== undefined? state[fieldName] : value} disabled={state[returnFieldEditName(fieldName)]} className="bg-transparent outline-none w-full" />
    </div>
  )
}

export const returnFieldEditName = (fieldName:string): "isNameDisable" | "isEmailDisable" | "isGenderDisable" | "isPhoneDisable" => {
  switch(fieldName){
    case "name":
      return "isNameDisable";
    case "email":
      return "isEmailDisable";
    case "gender":
      return "isGenderDisable";
    case "phone":
      return "isPhoneDisable";
    default:
      return "isNameDisable"
  }
}

export default memo(UserInputField)