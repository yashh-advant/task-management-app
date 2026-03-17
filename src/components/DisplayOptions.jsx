import React, { useState } from 'react';
import listIcon from '../assets/list.png';
import boardIcon from '../assets/board.png';

function DisplayOptions({ currentMode, onSelectMode }) {
  const [showGridOption, setShowGridOptions] = useState(false);

  const handleDisplayGrid = () => {
    setShowGridOptions(prev => !prev);
  };

  return (
    <div className="relative text-white flex justify-end">
      <button className="m-4" onClick={handleDisplayGrid}>
        display
      </button>

      {showGridOption && (
        <div className="absolute right-0 bg-[#111827] h-[130px] rounded-md top-full  mr-4 border-2 border-[#1F2937] flex flex-col p-2">
          <div className="flex gap-2 h-[70px]">
            <div
              className={`border-2 p-1 border-[#1F2937] rounded-md w-[80px] ${currentMode == 'list' && 'bg-[#2a2a2a]'}`}
              onClick={() => onSelectMode('list')}
            >
              <img src={listIcon} className="invert h-[30px] mx-auto" alt="" />
              <p className="text-center">List</p>
            </div>
            <div
              className={`border-2 p-1 border-[#1F2937] rounded-md w-[80px] ${currentMode == 'board' && 'bg-[#2a2a2a]'}`}
              onClick={() => onSelectMode('board')}
            >
              <img src={boardIcon} className="invert h-[30px] mx-auto" alt="" />
              <p className="text-center">Board</p>
            </div>
          </div>

          <div>
            <p>Group by</p>
          </div>
          <div>
            <p>Order by</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayOptions;
