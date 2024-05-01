const AddressInputField = ({
  name,
  placeholder,
  type,
  register,
  isRequired,
  errors,
  defaultValue
}: {
  name: string;
  placeholder: string;
  type: string;
  register: any;
  isRequired?: boolean | string;
  errors: any;
  defaultValue?: string | number
}) => {
  return (
    <div className="w-full smooth_transition" >
      <div className="p-3 bg-white text-sm w-full border">
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, { required: isRequired })}
          className="bg-transparent outline-none w-full"
          defaultValue={defaultValue}
        />
      </div>
      <p className="text-red-color text-xs px-1 mt-1 h-4" >{errors?? null}</p>
    </div>
  );
};

export default AddressInputField;
