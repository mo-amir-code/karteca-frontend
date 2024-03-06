import React from "react";

const UserGender = () => {
  return (
    <>
      {/* Gender area */}
      <div className="space-y-2">
        <span className="text-sm text-secondary-color">Your Gender</span>
        <form className="flex items-center gap-2 text-sm text-secondary-color">
          <label htmlFor="" className="flex items-center gap-2">
            <input
              disabled={true}
              type="radio"
              name="gender"
              className="cursor-pointer"
              value={"male"}
            />
            Male
          </label>
          <label htmlFor="" className="flex items-center gap-2">
            <input
              disabled={true}
              type="radio"
              name="gender"
              className="cursor-pointer"
              value={"female"}
            />
            Female
          </label>
        </form>
      </div>
      {/* End gender area */}
    </>
  );
};

export default UserGender;
