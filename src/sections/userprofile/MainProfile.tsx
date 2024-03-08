"use client"
import { useAppSelector } from '@/redux/hooks'
import { selectDesktop } from '@/redux/app/appSlice'
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const withLoadingIndicator = (importComponent: () => Promise<{ default: ComponentType<any> }>) =>
  dynamic(() => importComponent(), {
    loading: () => <div>Loading...</div>, 
});

const UserPersonalInfo = dynamic(() => import('@/components/userprofile/personalInfo'), {ssr: false});
const ManageAddresses = withLoadingIndicator(() => import('@/components/userprofile/manageAddresses'));
const Notifications = withLoadingIndicator(() => import('@/components/userprofile/notifications'));
const ReferDashboard = withLoadingIndicator(() => import('@/components/userprofile/referDashboard'));
const MyOrders = withLoadingIndicator(() => import('@/components/userprofile/orders'));
const OrderDetails = withLoadingIndicator(() => import('@/components/userprofile/orderDetails'));
const Wishlist = withLoadingIndicator(() => import('@/components/userprofile/wishlist'));

const MainProfile = () => {
  const {profile} = useAppSelector(selectDesktop);

  return (
    <div className='flex-grow bg-white rounded-lg py-4 px-6 max-md:px-3' >
      {
        (()=>{
          switch(profile){
            case "profile":
              return  <UserPersonalInfo />;
            case "addresses":
              return <ManageAddresses />;
            case "notification":
              return <Notifications />;
            case "dashboard":
              return <ReferDashboard />;
            case "orders":
              return <MyOrders />; 
            case "orderDetails":
              return <OrderDetails />;
            case "wishlist":
              return <Wishlist />;
            default:
              return;
          }
        })()
      }
    </div>
  )
}

export default MainProfile