import MainProfile from "@/sections/userprofile/MainProfile";
import Sidebar from "@/sections/userprofile/Sidebar";
import ChangePasswordConditional from "@/components/changePassword/ChangePasswordConditional";

const UserProfile = () => {
  return (
    <>
      <div className="w-full flex gap-2 max-md:gap-0">
        <Sidebar />
        <MainProfile />
      </div>
      <ChangePasswordConditional />
    </>
  );
};

export default UserProfile;
