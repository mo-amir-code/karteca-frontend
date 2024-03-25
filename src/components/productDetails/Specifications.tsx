
const Specifications = ({specs}:{specs:Object}) => {
  
  return (
    <div>
        {
            !!specs && Object.entries(specs).map(([key, value], idx) => (
                <li key={idx} className="flex items-center text-xs gap-1"><span className="font-medium" >{key}:</span><span>{value}</span></li>
            ))
        }
    </div>
  )
}

export default Specifications