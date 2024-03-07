import { IoAddSharp } from "react-icons/io5";

const AddAddress = () => {
  return (
    <div>
      <div className="flex items-center text-blue-600 gap-4 p-3 cursor-pointer border mt-3">
        <IoAddSharp size={20} className="" />
        <h4 className=" font-medium">ADD A NEW ADDRESS</h4>
      </div>
    </div>
  );
};

export default AddAddress;
