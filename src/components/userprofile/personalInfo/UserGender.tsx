import React from "react";
import SelectGender from "./SelectGender";

const UserGender = ({gender}:{gender:string}) => {
  return (
    <>
      {/* Gender area */}
      <div className="space-y-2 bottom_to_top_ani">
        <span className="text-sm text-secondary-color">Your Gender</span>
        <form className="flex items-center gap-2 text-sm text-secondary-color">
          <SelectGender gender={gender} />
        </form>
      </div>
      {/* End gender area */}
    </>
  );
};

export default UserGender;
