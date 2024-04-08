import { ReferWithdrawalType } from "@/redux/queries/refer/referTypes";
import TableHeading from "./TableHeading";
import { selectWithdrawalColor } from "@/utils/services";

const WithdrawalHistory = ({ data }: { data: ReferWithdrawalType[] }) => {
  return (
    <div className="space-y-4">
      <TableHeading
        title="Transaction History"
        subline="Your Transaction history"
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
                  <td className="text-center">{getData(withdrawal.createdAt)}</td>
                  <td className="text-center">₹{withdrawal.wallet.amount}</td>
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

const getData = (dateString:string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0'); // Get the day of the month
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get the month (adding 1 because months are zero-indexed)
  const year = date.getFullYear().toString(); // Get the full year
  const hour = date.getHours().toString().padStart(2, '0'); // Get the hour
  const minute = date.getMinutes().toString().padStart(2, '0'); // Get the minute

  return `${day}/${month}/${year} - ${hour}:${minute}`;
}

export default WithdrawalHistory;
