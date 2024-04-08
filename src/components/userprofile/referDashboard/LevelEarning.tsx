import { ReferLevelEarningType } from "@/redux/queries/refer/referTypes"
import TableHeading from "./TableHeading"


const LevelEarning = ({data, currenAmount, isWithdrawalActive}:{data:ReferLevelEarningType[], currenAmount:number, isWithdrawalActive?:boolean}) => {
  return (
    <div className="space-y-4" >
        <TableHeading amount={currenAmount} isWallet={!isWithdrawalActive} title="Levels Of Earning" subline="Your referral earning of each level" />
        <table className="w-full bg-white" >
            <thead className="py-4 rounded-lg max-md:text-sm text-text-color bg-primary-color" >
                <tr>
                    <th>Level</th>
                    <th>Lock</th>
                    <th>Active</th>
                    <th>Earning</th>
                </tr>
            </thead>
            <tbody className="text-sm max-md:text-xs space-y-2" >
                {data.map((level, idx) => (
                <tr key={idx} className="border" >
                    <td className="text-center" >{level.level}</td>
                    <td className="text-center" >{level.withdrawalDisabledUsers}</td>
                    <td className="text-center" >{level.withdrawalEnabledUsers}</td>
                    <td className="text-center" >₹{level.earning}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default LevelEarning