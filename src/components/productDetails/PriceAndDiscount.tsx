const PriceAndDiscount = () => {
  return (
    <div className="flex items-end justify-start py-2 gap-2">
      <span className="text-2xl font-medium text-secondary-color">₹4,999</span>
      <span className="text-sm mb-1 line-through text-gray-400 font-medium">
        ₹6,999
      </span>
      <span className="text-sm mb-1 text-green-color font-semibold">
        20% off
      </span>
    </div>
  );
};


export default PriceAndDiscount