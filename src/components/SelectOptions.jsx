import React, { useState } from 'react';

function SelectOptions({ classForSelected, classForList, selectedOption, options, children }) {
  // console.log(selectedOption);

  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = () => {
    setShowOptions(prev => !prev);
  };
  return (
    <div className="relative" onClick={handleShowOptions}>
      <p className={`${classForSelected}`}>{selectedOption}</p>
      {showOptions && (
        <div className={`absolute z-10 rounded-md ${classForList} `}>
          <ul className="flex flex-col gap-1 w-fit">{children(options)}</ul>
        </div>
      )}
    </div>
  );
}

export default SelectOptions;
