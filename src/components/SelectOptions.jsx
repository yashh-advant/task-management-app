import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function SelectOptions({ classForSelected, classForList, selectedOption, options, children }) {
  // console.log(selectedOption);
  const { darkTheme } = useSelector(state => state.ui);
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = () => {
    setShowOptions(prev => !prev);
  };
  return (
    <div className="relative" onClick={handleShowOptions}>
      <div className={`${classForSelected}`}>{selectedOption}</div>
      {showOptions && (
        <div
          className={`absolute z-10 rounded-md ${darkTheme ? 'bg-[#030712]' : 'bg-white'} border border-gray-500 ${classForList} `}
        >
          <ul className="flex flex-col gap-1 w-fit">{children(options)}</ul>
        </div>
      )}
    </div>
  );
}

export default SelectOptions;
