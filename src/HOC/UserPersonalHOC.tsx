"use client"
import { useUserContext } from "@/context/UserContext";
import { ReactNode, memo } from "react";
import toast from "react-hot-toast";

const UserPersonalHOC = ({children, title, fieldName}:{children:ReactNode, title:string, fieldName:string}) => {
  const {dispatch} = useUserContext();


  const handleToggleField = () => {
    let type;
    switch(fieldName){
      case "name":
        type = "nameedit";
        break;
      case "email":
        type = "emailedit";
        break;
      case "phone":
        type = "phoneedit";
        break;
      default:
        break;
    }

    if(!type){
      toast.error("Something went wrong");
      return;
    }

    dispatch({type})
  }

  return (
    <div className="space-y-2 py-4 bottom_to_top_ani">
      <div className="flex items-center gap-4">
        <h4 className="text-lg max-sm:text-sm font-medium text-secondary-color">
          {title}
        </h4>
        <span onClick={()=>handleToggleField()} className="text-sm select-none max-sm:text-xs font-medium text-blue-600 cursor-pointer">
          Edit
        </span>
      </div>
      {children}
    </div>
  );
};

export default memo(UserPersonalHOC);
