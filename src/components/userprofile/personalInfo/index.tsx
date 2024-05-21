"use client";
import UserPersonalHOC from "@/HOC/UserPersonalHOC";
import PersonalEmail from "./PersonalEmail";
import PersonalInfo from "./PersonalInfo";
import PersonalMobile from "./PersonalMobile";
import UserGender from "./UserGender";
import { memo, useEffect, useState } from "react";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "@/redux/queries/user/userAPI";
import { useAppSelector } from "@/redux/hooks";
import { selectLoggedInUserId } from "@/redux/slices/auth/authSlice";
import toast from "react-hot-toast";
import CommonButton from "@/components/buttons/CommonButton";
import { useUserContext } from "@/context/UserContext";
import { UpdateUserType } from "@/redux/queries/user/userTypes";
import { APIRequestType } from "@/redux/RootTypes";
import IsLoading from "@/HOC/IsLoading";
import { useSendOTPMutation } from "@/redux/queries/auth/authAPI";
import VerifyOTP from "./VerifyOTP";

const PersonalInfoIndex = () => {
  const [isVerifyOTPOpen, setIsVerifyOTPOpen] = useState<boolean>(false);
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [isProfileUpdateAllow, setIsProfileUpdateAllow] = useState<boolean>(false);
  const loggedInUserId = useAppSelector(selectLoggedInUserId);
  const { data, isLoading, isError, isSuccess } = useGetUserInfoQuery(
    loggedInUserId as string,
    { skip: loggedInUserId ? false : true }
  );
  const [updateUser] = useUpdateUserInfoMutation();
  const [sendOTP] = useSendOTPMutation();
  const { name, email, phone, gender, dispatch } = useUserContext();

  const handleSubmit = async () => {

    if(!email || !loggedInUserId){
      toast.error("Something went wrong!");
      return;
    }


    if (data?.data?.email !== email) {

      try {
        setIsVerifyOTPOpen(true);
        const { data:resData, error } = await sendOTP({email, userId:loggedInUserId, from:"newEmail"}) as {data:APIRequestType, error: { data:APIRequestType }}
        
        if(resData?.success){
          toast.success(resData?.message);
        }
        
        if(error?.data?.success === false){
          toast.error(error?.data?.message);
          setIsVerifyOTPOpen(false);
        }
      } catch (error) {
        console.error(error);
        setIsVerifyOTPOpen(false);
        toast.error("Something Error Happened!");
      }

    }else{
      handleChangeProfileInfo();
    }
  };

  const handleChangeProfileInfo = async () => {
    if (!name || !email || !phone || !gender) {
      toast.error("Something went wrong");
      return;
    }

    try {
      setIsVerifyOTPOpen(false);
      setIsButtonLoading(true);

      const newState: UpdateUserType = {
        userId: loggedInUserId!,
        name,
        email,
        phone,
        gender,
      };

      dispatch({ type: "disableedit" });

      const { data: resData, error } = (await updateUser(newState)) as {
        data: APIRequestType;
        error: { data: APIRequestType}
      };

      if (resData?.success){
        toast.success("Changes has been done");
      }
      
      if(error?.data){
        toast.error(error?.data?.message);
      }

      setIsProfileUpdateAllow(false);
      setIsButtonLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Somehting Error Happened!");
      setIsProfileUpdateAllow(false);
    }
  };

  useEffect(() => {
    if(isProfileUpdateAllow){
      handleChangeProfileInfo();
    }
  }, [isProfileUpdateAllow]);

  return (
    <>
      <IsLoading isLoading={isLoading} isSuccess={isSuccess} isError={isError}>
        <div className="space-y-6 max-w-[600px]">
          <div className="space-y-4">
            {/* Name area */}
            <UserPersonalHOC fieldName="name" title="Personal Information">
              <PersonalInfo name={data?.data?.name} />
            </UserPersonalHOC>
            {/* end Name area */}
          </div>

          <UserGender gender={data?.data?.gender} />

          <div>
            <UserPersonalHOC fieldName="email" title="Email Address">
              <PersonalEmail email={data?.data?.email} />
            </UserPersonalHOC>
            <UserPersonalHOC fieldName="phone" title="Mobile Number">
              <PersonalMobile phone={data?.data?.phone} />
            </UserPersonalHOC>
          </div>
          <CommonButton
            name="Submit"
            handleClick={handleSubmit}
            isLoading={isButtonLoading}
          />
        </div>
      </IsLoading>
      {!!isVerifyOTPOpen && <VerifyOTP setIsVerifyOTPOpen={setIsVerifyOTPOpen} setIsProfileUpdateAllow={setIsProfileUpdateAllow} />}
    </>
  );
};

export default memo(PersonalInfoIndex);
