import { ReferWithdrawalType } from "@/redux/queries/refer/referTypes";
import TableHeading from "./TableHeading";
import { selectWithdrawalColor } from "@/utils/services";

const WithdrawalHistory = ({ data }: { data: ReferWithdrawalType[] }) => {
  return (
    <div className="space-y-4">
      <TableHeading
        title="Withdrawal History"
        subline="Your withdrawal history"
      />
      <table className="w-full bg-white">
        {data.length ? (
          <>
            <thead className="py-4 text-text-color rounded-lg max-md:text-sm bg-primary-color">
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-sm max-md:text-xs space-y-2">
              {data.map((withdrawal) => (
                <tr key={withdrawal._id} className="border">
                  <td className="text-center">12/12/1212</td>
                  <td className="text-center">₹{withdrawal.amount}</td>
                  <td
                    style={{ color: selectWithdrawalColor(withdrawal.status) }}
                    className="text-center"
                  >
                    {withdrawal.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        ) : (
          <p className="text-center w-full max-md:text-sm">0 Withdrawal</p>
        )}
      </table>
    </div>
  );
};

export default WithdrawalHistory;
