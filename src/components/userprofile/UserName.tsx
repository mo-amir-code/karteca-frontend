"use client"

import { useAppSelector } from "@/redux/hooks"
import { selectLoggedInUserName } from "@/redux/slices/auth/authSlice"

const UserName = () => {
    const loggedInUserName = useAppSelector(selectLoggedInUserName);

  return (
    <span className="text-sm font-medium" >{loggedInUserName}</span>
  )
}

export default UserName
