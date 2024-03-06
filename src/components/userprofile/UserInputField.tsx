

const UserInputField = ({value, isDisabled}:{value:string, isDisabled:boolean}) => {
  return (
    <div className="w-full px-4 py-3 text-gray-500 text-sm bg-tertiary-color" >
        <input type="text" value={value} disabled={isDisabled} className="bg-transparent outline-none w-full" />
    </div>
  )
}

export default UserInputField