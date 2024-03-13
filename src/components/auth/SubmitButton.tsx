const SubmitButton = ({ name, icon }: { name: string; icon?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        type="submit"
        className="px-8 w-full gap-1 border-2 border-primary-color smooth_transition hover:shadow-lg py-2 flex items-center justify-center"
      >
        <span className="text-xl">{name}</span>
      </button>
    </div>
  );
};

export default SubmitButton;
