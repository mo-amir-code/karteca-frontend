import { productSpecs } from "@/data"


const Specifications = () => {
  return (
    <div>
        {
            Object.entries(productSpecs).map(([key, value], idx) => (
                <li key={idx} className="flex items-center text-sm gap-1"><span className="font-medium" >{key}:</span><span>{value}</span></li>
            ))
        }
    </div>
  )
}

export default Specifications