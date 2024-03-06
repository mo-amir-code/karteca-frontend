import UserInputField from "../UserInputField";

const PersonalInfo = () => {
  return (
    <>
      {/* Name area */}
      <div className="flex items-center gap-4">
        <UserInputField value="Mohd" isDisabled={true} />
        <UserInputField value="Amir" isDisabled={true} />
      </div>
    </>
  );
};

export default PersonalInfo;
