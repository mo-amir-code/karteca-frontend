import { productWarranty } from "@/data"


const Warranty = () => {
  return (
    <ul className="space-y-1" >
        {
            Object.entries(productWarranty).map(([key, value], idx) => (
                <li key={idx} className="flex items-center text-sm gap-1"><span className="font-medium" >{key}:</span><span>{value}</span></li>
            ))
        }
    </ul>
  )
}

export default Warranty