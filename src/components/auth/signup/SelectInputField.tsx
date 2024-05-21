const SelectInputField = ({
  name,
  required,
  error,
  list,
  defaultValue,
  register
}: {
  name: string;
  register?: any;
  required?: boolean | string;
  error?: string | null;
  list: [string];
  defaultValue:string,
}) => {
  return (
    <div className="w-full cursor-pointer">
      <div className="w-full text-primary-color cursor-pointer flex-1 text-xl gap-2 border-2 border-secondary-color_3 py-3 px-2 max-md:py-2 max-md:px-1 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start">
        <select
          {...(register ? { ...register(name, { required: required }) } : null)}
          className={`text-base max-md:text-sm font-normal text-secondary-color bg-transparent outline-none group w-full`}
        >
            <option>----- {defaultValue} -----</option>
          {list.map((item, idx) => (
            <option key={idx} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <span className="text-xs text-start block text-red-color">
        {error ?? null}
      </span>
    </div>
  );
};

export default SelectInputField;
