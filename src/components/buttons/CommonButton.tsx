import ButtonLoader from "../loader/ButtonLoader"


const CommonButton = ({name, handleClick, isDisable, isLoading}:{name:string, handleClick:Function, isDisable?:boolean, isLoading?:boolean }) => {
  return (
    <button onClick={()=>handleClick()} disabled={isDisable} className="font-medium whitespace-nowrap px-4 md:hover:shadow-md py-[6px] text-sm smooth_transition rounded-md bg-primary-color text-white"  >
        {isLoading? <ButtonLoader color /> : name}
    </button>
  )
}

export default CommonButton
