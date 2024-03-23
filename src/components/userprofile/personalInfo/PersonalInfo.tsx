import UserInputField from "../UserInputField";

const PersonalInfo = ({name}:{name:string}) => {
  return (
    <>
      {/* Name area */}
      <div className="flex items-center gap-4">
        <UserInputField fieldName={"name"} value={name} />
      </div>
    </>
  );
};

export default PersonalInfo;
