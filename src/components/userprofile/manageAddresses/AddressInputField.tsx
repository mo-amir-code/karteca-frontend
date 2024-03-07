const AddressInputField = ({
  name,
  placeholder,
  type,
  register,
  isRequired,
  errors,
}: {
  name: string;
  placeholder: string;
  type: string;
  register: any;
  isRequired?: boolean;
  errors: any;
}) => {
  return (
    <div className="w-full smooth_transition" >
      <div className="p-3 bg-white text-sm w-full border">
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, { required: isRequired ? true : false })}
          className="bg-transparent outline-none w-full"
        />
      </div>
      <p className="text-red-color text-xs px-1 mt-1 h-4" >{errors[name] && `${name} is required`}</p>
    </div>
  );
};

export default AddressInputField;
