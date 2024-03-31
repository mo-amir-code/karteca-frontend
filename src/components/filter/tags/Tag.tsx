import { IoCloseOutline } from "react-icons/io5";

const Tag = ({ text }: { text: string }) => {
    return (
      <div
        style={{ maxWidth: "max-content" }}
        className="flex items-center gap-2 justify-center font-lato font-medium text-secondary-color p-2 bg-tag-color rounded-sm hover:line-through smooth_transition text-xs"
      >
        <IoCloseOutline size={16} className="" />
        {text}
      </div>
    );
  };

export default Tag