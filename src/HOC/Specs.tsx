import { ReactNode } from "react"


const Specs = ({children, title}:{children:ReactNode, title:string}) => {
  return (
    <div className="px-3 py-1 max-w-[600px] smooth_transition space-y-1" >
        <p className="font-medium text-sm" >{title}</p>
        {children}
    </div>
  )
}

export default Specs