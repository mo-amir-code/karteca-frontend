

const ButtonLoader = ({color}:{color?:boolean}) => {
  return (
    <div className={`loader border-[3px] border-l-transparent ${color? "border-white" : "border-primary-color"}`}></div>
  )
}

export default ButtonLoader