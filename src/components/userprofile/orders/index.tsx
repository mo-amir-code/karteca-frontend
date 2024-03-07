import Order from "./Order";

const index = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-secondary-color font-medium">My Orders</h2>
      <div>
        <Order isFirst />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
};

export default index;
