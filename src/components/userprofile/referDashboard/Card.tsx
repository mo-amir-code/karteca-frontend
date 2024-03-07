import { GiCash } from "react-icons/gi";
import { IoIosCash } from "react-icons/io";
import { PiBankFill } from "react-icons/pi";

const Card = ({
  type,
  msg,
  amount,
  isWithdrawalActive,
}: {
  type: string;
  msg: string;
  amount: number;
  isWithdrawalActive?: boolean;
}) => {
  return (
    <div className="p-3 w-[120px] space-y-1 shadow-md rounded-[12px] bg-white text-secondary-color">
      {(() => {
        switch (type) {
          case "totalEarning":
            return <GiCash size={28} className="text-green-color" />;
          case "totalWithdrawal":
            return <IoIosCash size={28} className="text-red-color" />;
          case "isWithdrawalActive":
            return (
              <PiBankFill
                size={28}
                className={`${
                  isWithdrawalActive ? "text-green-color" : "text-red-color"
                }`}
              />
            );
          default:
            return;
        }
      })()}
      <p className="text-xs">{msg}</p>
      <p
        className={`font-medium ${
          type === "totalEarning"
            ? "text-green-color"
            : type === "totalWithdrawal"
            ? "text-red-color"
            : isWithdrawalActive
            ? "text-green-color text-sm"
            : "text-red-color text-sm"
        }`}
      >
        {type === "isWithdrawalActive"
          ? isWithdrawalActive
            ? "active"
            : "Lock"
          : `₹${amount}`}
      </p>
    </div>
  );
};

export default Card;
