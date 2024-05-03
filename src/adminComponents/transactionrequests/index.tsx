"use client"
import IsLoading from "@/HOC/IsLoading";
import { useAppSelector } from "@/redux/hooks";
import { useFetchUserTransactionRequestsQuery } from "@/redux/queries/admin/adminAPI";
import { selectUserRole } from "@/redux/slices/auth/authSlice";
import SelectStatus from "./SelectStatus";

interface TransactionRequestType{
  _id: string,
  name: string,
  amount: number,
  phone?: number,
  utrId: string,
  status: string,
  type: "shopping" | "subscription"
}

const Index = () => {
  const { data, isError, isFetching, isLoading, isSuccess } = useFetchUserTransactionRequestsQuery(null);


  return (
    <IsLoading isLoading={isLoading || isFetching} isSuccess={isSuccess} isError={isError} >
    <article className="space-y-2" >
      <h2 className=" font-semibold text-2xl">Transactions Requests</h2>

      <table className="w-full bg-white">
        <>
          <thead className="py-4 text-text-color rounded-lg max-md:text-sm bg-primary-color">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Mobile No.</th>
              <th>UTR Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm max-md:text-xs space-y-2">
            {data?.data?.map((txn:TransactionRequestType)=>(<tr className="border">
              <td className="text-center">{txn.name}</td>
              <td className="text-center">₹{txn.amount}</td>
              <td className="text-center">{txn.phone?? "-"}</td>
              <td className="text-center">{txn.utrId}</td>
              <td className="text-center"><SelectStatus selectedValue={txn.status} utrId={txn.utrId} isFrom={txn.type} /></td>
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