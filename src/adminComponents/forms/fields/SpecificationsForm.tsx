"use client";

export type SpecsType = { field: string | null; value: string | null }

const SpecificationForm = ({specs, setSpecs}:{specs:[SpecsType], setSpecs:Function}) => {

  const handleSpecsInput = ({type, value, index}:{type:string, value:string, index: number}) => {
    let newSpecs = [...specs];
    if(type === "field")
        newSpecs[index].field = value;
    else
        newSpecs[index].value = value;

    setSpecs(newSpecs as [SpecsType]);
  }

  const handleCreateSpecs = () => {
    const newSpecs = [...specs, { field: null, value: null }]
    setSpecs(newSpecs as [SpecsType]);
  }

  return (
    <div className="w-full">
        <div className="flex items-center justify-between" >
      <span className="text-lg font-semibold">Specifications</span>
      <button onClick={(e)=> {
        e.preventDefault()
        handleCreateSpecs()
      }} className="bg-primary-color text-white px-3 py-1 rounded-md" >
        Add New Spec
      </button>
        </div>
      {specs.map((item, idx) => (
        <div key={idx} className="flex space-y-2 items-center gap-2" >
          <div className="w-full text-primary-color cursor-pointer flex-1 text-xl gap-2 border-2 border-secondary-color_3 py-3 px-2 max-md:py-2 max-md:px-1 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start">
            <input
              onChange={(e)=> handleSpecsInput({type: "field", value: e.target.value, index:idx})}
              type={"text"}
              className={`text-base max-md:text-sm font-normal  text-secondary-color bg-transparent outline-none group w-full`}
              placeholder="Field"
            />
          </div>
          <div className="w-full text-primary-color cursor-pointer flex-1 text-xl gap-2 border-2 border-secondary-color_3 py-3 px-2 max-md:py-2 max-md:px-1 hover:border-primary-color hover:shadow-lg shadow-primary-color on_focus transition-all duration-200 text-secondary-color_3 flex items-center justify-start">
            <input
              onChange={(e)=> handleSpecsInput({type: "value", value: e.target.value, index:idx})}
              type={"text"}
              className={`text-base max-md:text-sm font-normal  text-secondary-color bg-transparent outline-none group w-full`}
              placeholder="Value"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecificationForm;
