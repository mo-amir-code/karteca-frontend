import React from "react";

const ProfilePath = ({
  list,
  title,
}: {
  list?: [{ name: string; path: string }];
  title: string;
}) => {
  return (
    <div className="bg-white max-md:bg-tertiary-color rounded-lg" >
      <div className="flex items-center gap-2 p-2">
        <div className="w-11 h-11 rounded-full bg-primary-color"></div>
        <span className="text-base text-gray-500 font-semibold font-lato" >{title}</span>
      </div>
      {!!list && <ul className="text-gray-500 pb-2" >
        {list?.map((item, idx) => (
          <li key={idx} className="text-sm pl-[60px] font-medium hover:text-primary-color smooth_transition py-[6px] cursor-pointer smooth_transition hover:bg-primary-color/5" >{item.name}</li>
        ))}
      </ul>}
    </div>
  );
};

export default ProfilePath;
