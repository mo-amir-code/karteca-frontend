"use client"
import UserPersonalHOC from "@/HOC/UserPersonalHOC";
import PersonalEmail from "./PersonalEmail";
import PersonalInfo from "./PersonalInfo";
import PersonalMobile from "./PersonalMobile";
import UserGender from "./UserGender";
import { memo } from "react";

const index = () => {

    
  return (
    <div className="space-y-6 max-w-[600px]">
      <div className="space-y-4">
        <UserPersonalHOC>
          <PersonalInfo />
        </UserPersonalHOC>
        {/* end Name area */}
      </div>

      <UserGender />

      <div>
        <UserPersonalHOC>
          <PersonalEmail />
        </UserPersonalHOC>
        <UserPersonalHOC>
          <PersonalMobile />
        </UserPersonalHOC>
      </div>
    </div>
  );
};

export default memo(index);
