import React, { useState } from 'react';

function SelectOptions({ classForSelected, classForList, selectedOption, options, children }) {
  // console.log(selectedOption);
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = () => {
    setShowOptions(prev => !prev);
  };
  return (
    <div className="relative" onClick={handleShowOptions}>
      <div className={classForSelected}>{selectedOption}</div>

      {showOptions && (
        <div
          className={`absolute z-10 rounded-md 
        bg-white dark:bg-[#030712] 
        border border-gray-500 
        ${classForList}`}
        >
          <ul className="flex flex-col gap-1 w-fit">{children(options)}</ul>
        </div>
      )}
    </div>
  );
}

export default SelectOptions;
