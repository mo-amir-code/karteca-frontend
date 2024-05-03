"use client"
import IsLoading from "@/HOC/IsLoading";
import { useFetchUserWithdrawalRequestsQuery } from "@/redux/queries/admin/adminAPI";
import SelectWithdrawalStatus from "./SelectWithdrawalStatus";

interface TransactionRequestType{
  _id: string,
  name: string,
  amount: number,
  phone?: number,
  upiId: string,
  status:  "success" | "failed" | "verified" | "pending" | "processing",
  type: "shopping" | "subscription"
}

const Index = () => {
  const { data, isError, isFetching, isLoading, isSuccess } = useFetchUserWithdrawalRequestsQuery(null);


  return (
    <IsLoading isLoading={isLoading || isFetching} isSuccess={isSuccess} isError={isError} >
    <article className="space-y-2" >
      <h2 className=" font-semibold text-2xl">Withdrawal Requests</h2>

      <table className="w-full bg-white">
        <>
          <thead className="py-4 text-text-color rounded-lg max-md:text-sm bg-primary-color">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Mobile No.</th>
              <th>UPI Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm max-md:text-xs space-y-2">
            {data?.data?.map((txn:TransactionRequestType)=>(<tr key={txn._id} className="border">
              <td className="text-center">{txn.name}</td>
              <td className="text-center">₹{txn.amount}</td>
              <td className="text-center">{txn.phone?? "-"}</td>
              <td className="text-center">{txn.upiId}</td>
              <td className="text-center"><SelectWithdrawalStatus selectedValue={txn.status} withdrawalRequestId={txn._id} /></td>
            </tr>))}
          </tbody>
        </>
        {/* // <p className="text-center w-full max-md:text-sm">0 Withdrawal</p> */}
      </table>
    </article>
    </IsLoading>
  );
};

export default Index;