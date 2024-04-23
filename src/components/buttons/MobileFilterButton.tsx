"use client"

const MobileFilterButton = ({name, handle, type}:{name:string, handle: Function, type?:string}) => {
  return (
    <button onClick={()=>handle()} className={`px-3 w-full font-medium text-white py-1 rounded-md ${selectBgColor(type)}`} >{name}</button>
  )
}

export default MobileFilterButton

const selectBgColor = (type?:string) => {
    switch(type){
        case "danger": return "bg-red-color";
        case "success": return "bg-primary-color";
        default: return "bg-primary-color"
    }
}
