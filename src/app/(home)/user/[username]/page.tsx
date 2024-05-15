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

export async function generateMetadata() {
  return {
    title: "Karteca - (You)",
    description: "Share & Earn money | Shop on Karteca",
  };
}


export default UserProfile;
