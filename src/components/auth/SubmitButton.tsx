import ButtonLoader from "../loader/ButtonLoader";

const SubmitButton = ({ name, icon, isLoading }: { name: string; icon?: string, isLoading?:boolean }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="submit"
        className="px-8 h-10 w-full gap-1 border-2 border-primary-color smooth_transition hover:shadow-lg py-2 flex items-center justify-center"
      >
        {
          isLoading? <div><ButtonLoader /></div> : <span className="text-lg font-medium">{name}</span> 
        }
      </button>
    </div>
  );
};

export default SubmitButton;
