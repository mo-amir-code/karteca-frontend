

const NameTemplate = ({name}:{name:string}) => {
  return (
    <div className="w-full px-2 py-2 bg-primary-color text-white text-sm font-semibold" >Hello! {name || "Mo Amir"}</div>
  )
}

export default NameTemplate
