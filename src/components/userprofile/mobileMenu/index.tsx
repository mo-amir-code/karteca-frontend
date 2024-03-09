import MobileProfileMenu from "./MobileProfileMenu";
import { accountSettings, mystuffs } from "@/data";

const index = () => {
  return (
    <div className="" >
      <MobileProfileMenu title="Dashboard" icon="dashboard" />
      <MobileProfileMenu title="My Orders" icon="order" />
      <MobileProfileMenu list={accountSettings as [{name:string}]} title="Account Settings" icon="account" />
      <MobileProfileMenu list={mystuffs as [{name:string}]} title="My Stuff" icon="stuff" />
    </div>
  );
};

export default index;
