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
    <div className="p-3 w-[120px] max-sm:w-[100px] smooth_transition space-y-1 shadow-md rounded-[12px] bg-white text-secondary-color">
      {(() => {
        switch (type) {
          case "totalEarning":
            return <GiCash className="w-[28px] h-[28px] max-sm:w-[24px] max-sm:h-[24px] text-green-color" />;
          case "totalWithdrawal":
            return <IoIosCash className="w-[28px] h-[28px] max-sm:w-[24px] max-sm:h-[24px] text-red-color" />;
          case "isWithdrawalActive":
            return (
              <PiBankFill
                className={`w-[28px] h-[28px] max-sm:w-[24px] max-sm:h-[24px] ${
                  isWithdrawalActive ? "text-green-color" : "text-red-color"
                }`}
              />
            );
          default:
            return;
        }
      })()}
      <p className="text-xs max-sm:text-[10px]">{msg}</p>
      <p
        className={`font-medium max-sm:text-xs ${
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
