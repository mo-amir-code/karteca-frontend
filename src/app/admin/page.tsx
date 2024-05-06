import AdminUPI from "@/adminComponents/adminupis";
import CreateAdminForm from "@/adminComponents/forms/CreateAdminForm";
import TotalUsers from "@/adminComponents/totalUsers";
import TransactionRequests from "@/adminComponents/transactionrequests";
import WithdrawalRequests from "@/adminComponents/withdrawalrequests";
import Loader from "@/components/loader/Loader";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="max-w-6xl space-y-6 mx-auto py-6">
      <Suspense fallback={<Loader />}>
        <TotalUsers />
        <TransactionRequests />
        <WithdrawalRequests />
        <CreateAdminForm />
        <AdminUPI />
      </Suspense>
    </main>
  );
}
