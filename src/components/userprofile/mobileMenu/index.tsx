import MobileProfileMenu from "./MobileProfileMenu";
import { accountSettings, help, mystuffs, payments } from "@/data";
import ShortDashboard from "./ShortDashboard";

const index = () => {
  return (
    <div className="space-y-8">
      <ShortDashboard />
      <div>
        <MobileProfileMenu title="Dashboard" icon="dashboard" />
        <MobileProfileMenu title="My Orders" icon="order" />
        <MobileProfileMenu
          list={accountSettings as [{ name: string }]}
          title="Account Settings"
          icon="account"
        />
        <MobileProfileMenu
          list={payments as [{ name: string }]}
          title="Payments"
          icon="payment"
        />
        <MobileProfileMenu
          list={mystuffs as [{ name: string }]}
          title="My Stuff"
          icon="stuff"
        />
        <MobileProfileMenu
          list={help as [{ name: string }]}
          title="Help & Support"
          icon="support"
        />
      </div>
    </div>
  );
};

export default index;
