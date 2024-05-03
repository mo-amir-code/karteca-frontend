"use client"
import React, { useLayoutEffect } from 'react'
import Navbar from "@/adminComponents/navbar"
import { useAppSelector } from '@/redux/hooks';
import { selectIsUserLoggedIn, selectUserRole } from '@/redux/slices/auth/authSlice';
import { usePathname, useRouter } from 'next/navigation';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const loggedInUserRole = useAppSelector(selectUserRole);
  const isUserLoggedIn = useAppSelector(selectIsUserLoggedIn);
  const router = useRouter();
  const pathname = usePathname();


  // useLayoutEffect(() => {
  //   if(loggedInUserRole !== "admin"){
  //     router.push("/");
  //   }

  // }, [pathname]);

  if(!isUserLoggedIn || loggedInUserRole !== "admin"){
    router.push("/");
    return;
  }
    
  return (
    <div className='font-poppins' >
    <Navbar />
    {children}
    </div>
  )
}

export default Layout
