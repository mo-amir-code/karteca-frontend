"use client"
import { IoIosArrowDown } from "react-icons/io";
import MobileMenuField from "./MobileMenuField";
import useProfileIcons from "@/components/customHooks/useProfileIcons";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setMobileProfileMenu, setProfile } from "@/redux/app/appSlice";

const MobileProfileMenu = ({title, list, icon}:{title:string, list?:[{name:string}], icon:string}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleNavigate = ({target}:{target:string}) => {
    let newTarget;
    switch(target){
      case "order":
        newTarget = "orders";
        break;
      case "dashboard":
        newTarget = target;
        break;
      case "Profile Information":
        newTarget = "profile";
        break;
      case "Manage Addresses":
        newTarget = "addresses";
        break;
      case "Notifications":
        newTarget = "notification";
        break;
      case "Wishlist":
        newTarget = "wishlist";
        break;
      default:
        return;
    }

    if(newTarget){
      dispatch(setProfile({profile:newTarget}));
      dispatch(setMobileProfileMenu({isProfileMenuOpen:false}))
    }
  }

  return (
      <div className={`font-lato bg-white border-t`}>
        <div className="flex p-3 items-center justify-between cursor-pointer">
          <div onClick={()=>handleNavigate({target:icon})} className="font-semibold w-full flex items-center gap-2 font-lato text-secondary-color">
            <span className="text-primary-color" >{useProfileIcons({icon})}</span>
            <span>{title}</span>
          </div>
          {(!!list) && <div onClick={()=>setIsOpen((prev) => !prev)} className="flex items-center justify-center gap-4">
            <IoIosArrowDown
              size={18}
              className={`text-secondary-color ${!isOpen? "-rotate-90" : "rotate-0"} mr-2 smooth_transition`}
            />
          </div>}
        </div>
        {
          !!list && isOpen && <MobileMenuField list={list} handleClick={handleNavigate} />
        }
      </div>
  );
};

export default MobileProfileMenu;
