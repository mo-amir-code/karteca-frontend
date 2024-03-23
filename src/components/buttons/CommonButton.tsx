import ButtonLoader from "../loader/ButtonLoader"


const CommonButton = ({name, handleClick, isDisable, isLoading}:{name:string, handleClick:Function, isDisable?:boolean, isLoading?:boolean }) => {
  return (
    <button onClick={()=>handleClick()} disabled={isDisable} className="font-medium px-5 md:hover:shadow-md py-2 smooth_transition rounded-md bg-primary-color text-white"  >
        {isLoading? <ButtonLoader /> : name}
    </button>
  )
}

export default CommonButton
