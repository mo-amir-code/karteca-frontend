"use client";

import { useUserContext } from "@/context/UserContext";
import { useEffect } from "react";
import { returnFieldEditName } from "../UserInputField";

const genders = [
  {
    value: "Male",
  },
  {
    value: "Female",
  },
  {
    value: "Transgender",
  },
];

const SelectGender = ({gender}:{gender:string}) => {
  const state = useUserContext();


  const handleGenderChange = (selectedGender:string) => {
    state.dispatch({type:"gender", payload: selectedGender});
  }

  useEffect(() => {
    state.dispatch({type: "gender", payload: gender});
  }, []);

  return genders.map(({ value }, idx) => (
    <label key={idx} htmlFor="" className="flex items-center gap-2">
      <input
        disabled={state[returnFieldEditName("gender")]}
        type="radio"
        name="gender"
        checked={state.gender === value.toLocaleLowerCase()}
        onChange={(e)=>handleGenderChange(e.target.value)}
        className="cursor-pointer"
        value={value.toLocaleLowerCase()}
      />
      {value}
    </label>
  ));
};

export default SelectGender;
