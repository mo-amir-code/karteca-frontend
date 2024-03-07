import TableHeading from "./TableHeading"


const WithdrawalHistory = () => {
  return (
    <div className="space-y-4" >
        <TableHeading title="Withdrawal History" subline="Your withdrawal history"  />
        <table className="w-full bg-white" >
            <thead className="py-4 rounded-lg bg-primary-color" >
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody className="text-sm space-y-2" >
                <tr className="border" >
                    <td className="text-center" >12/12/1212</td>
                    <td className="text-center" >345</td>
                    <td className="text-center text-green-color" >successfull</td>
                </tr>
                <tr className="border" >
                    <td className="text-center" >12/12/1212</td>
                    <td className="text-center" >345</td>
                    <td className="text-center text-red-color" >cancelled</td>
                </tr>
                <tr className="border" >
                    <td className="text-center" >12/12/1212</td>
                    <td className="text-center" >345</td>
                    <td className="text-center text-green-color" >successfull</td>
                </tr>
                <tr className="border" >
                    <td className="text-center" >12/12/1212</td>
                    <td className="text-center" >345</td>
                    <td className="text-center text-green-color" >successfull</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default WithdrawalHistory