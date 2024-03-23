"use client";
import UserPersonalHOC from "@/HOC/UserPersonalHOC";
import PersonalEmail from "./PersonalEmail";
import PersonalInfo from "./PersonalInfo";
import PersonalMobile from "./PersonalMobile";
import UserGender from "./UserGender";
import { memo, useState } from "react";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "@/redux/queries/user/userAPI";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import FullLoader from "@/components/loader/FullLoader";
import toast from "react-hot-toast";
import CommonButton from "@/components/buttons/CommonButton";
import { useUserContext } from "@/context/UserContext";
import { UpdateUserType } from "@/redux/queries/user/userTypes";
import { APIRequestType } from "@/redux/RootTypes";

const PersonalInfoIndex = () => {
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const { data, isLoading, isError, isSuccess } = useGetUserInfoQuery(
    loggedInUserId as string
  );
  const [updateUser] = useUpdateUserInfoMutation();
  const { name, email, phone, gender, dispatch } = useUserContext();

  if (isError) {
    toast.error("Something went wrong!");
  }

  if (isLoading) {
    return <FullLoader />;
  }

  const handleSubmit = async () => {
    if (!name || !email || !phone || !gender) {
      toast.error("Something went wrong");
      return;
    }

    setIsButtonLoading(true);

    const newState: UpdateUserType = {
      userId: loggedInUserId!,
      name,
      email,
      phone,
      gender,
    };

    dispatch({type: "disableedit"});

    const { data } = (await updateUser(newState)) as { data: APIRequestType };

    if (!data.success) toast.error("Internal Error Occurred!");
    else toast.success("Changes has been done")

    setIsButtonLoading(false);
  };

  return (
    <>
      {isSuccess ? (
        <div className="space-y-6 max-w-[600px]">
          <div className="space-y-4">
            {/* Name area */}
            <UserPersonalHOC fieldName="name" title="Personal Information">
              <PersonalInfo name={data?.data?.name} />
            </UserPersonalHOC>
            {/* end Name area */}
          </div>

          <UserGender gender={data.data.gender} />

          <div>
            <UserPersonalHOC fieldName="email" title="Email Address">
              <PersonalEmail email={data.data.email} />
            </UserPersonalHOC>
            <UserPersonalHOC fieldName="phone" title="Mobile Number">
              <PersonalMobile phone={data.data.phone} />
            </UserPersonalHOC>
          </div>
          <CommonButton name="Submit" handleClick={handleSubmit} isLoading={isButtonLoading} />
        </div>
      ) : (
        <div>Server error</div>
      )}
    </>
  );
};

export default memo(PersonalInfoIndex);
