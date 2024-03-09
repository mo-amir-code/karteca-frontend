


const MobileMenuField = ({list, handleClick}:{list:[{name:string}], handleClick:Function}) => {

    return (
      <div className={`w-full pb-2 pl-7 overflow-hidden bg-white smooth_transition `}>
        <ul>
          {list.map((li, idx) => (
            <li
              key={idx}
              onClick={() => handleClick({ target: li.name })}
              className={`py-1 cursor-pointer px-3 text-sm`}
            >
              {li.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default MobileMenuField