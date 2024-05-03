import TotalUsers from "@/adminComponents/totalUsers"
import TransactionRequests from "@/adminComponents/transactionrequests";

export default function Home() {
  return (
    <main className="max-w-6xl space-y-6 mx-auto py-6" >
      <TotalUsers />
      <TransactionRequests />
    </main>
  );
}