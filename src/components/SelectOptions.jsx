import React, { useState } from 'react';

function SelectOptions({ selectedOption, options, children }) {
  console.log(selectedOption);

  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = () => {
    setShowOptions(prev => !prev);
  };
  return (
    <div className="relative" onClick={handleShowOptions}>
      <p className="bg-gray-700 p-1.5 rounded-md">{selectedOption}</p>
      {showOptions && (
        <div className="absolute bg-gray-600 p-2 mt-2 rounded-md">
          <ul className="flex flex-col gap-1 w-fit">{children(options)}</ul>
        </div>
      )}
    </div>
  );
}

export default SelectOptions;
