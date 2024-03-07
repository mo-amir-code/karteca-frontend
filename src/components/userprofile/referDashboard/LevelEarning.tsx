import TableHeading from "./TableHeading"


const LevelEarning = () => {
  return (
    <div className="space-y-4" >
        <TableHeading isWallet title="Levels Of Earning" subline="Your referral earning of each level" />
        <table className="w-full bg-white" >
            <thead className="py-4 rounded-lg bg-primary-color" >
                <tr>
                    <th>Level</th>
                    <th>Lock</th>
                    <th>Active</th>
                    <th>Earning</th>
                </tr>
            </thead>
            <tbody className="text-sm space-y-2" >
                <tr className="border" >
                    <td className="text-center" >1</td>
                    <td className="text-center" >12</td>
                    <td className="text-center" >24</td>
                    <td className="text-center" >244</td>
                </tr>
                <tr className="border" >
                    <td className="text-center" >1</td>
                    <td className="text-center" >12</td>
                    <td className="text-center" >24</td>
                    <td className="text-center" >244</td>
                </tr>
                <tr className="border" >
                    <td className="text-center" >1</td>
                    <td className="text-center" >12</td>
                    <td className="text-center" >24</td>
                    <td className="text-center" >244</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default LevelEarning