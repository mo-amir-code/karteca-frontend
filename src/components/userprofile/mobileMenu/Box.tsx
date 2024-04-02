

const Box = ({amount, message}:{amount:number | string, message:string}) => { 

  return (
    <div className="border bottom_to_top_ani p-2 text-center " >
        <span className="block text-sm font-semibold text-primary-color" >{amount}</span>
        <span className="block text-[10px] text-secondary-color" >{message}</span>
    </div>
  )
}

export default Box