import React, { useState } from 'react';
import listIcon from '../assets/list.png';
import boardIcon from '../assets/board.png';
import SelectOptions from './SelectOptions';

function DisplayOptions({ displayOptions, onSelect }) {
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
        <div className="absolute right-0 bg-[#111827] h-[165px] rounded-md top-full  mr-4 border-2 border-[#1F2937] flex flex-col p-2">
          <div className="flex gap-2 h-[70px]">
            <div
              className={`border-2 p-1 border-[#1F2937] rounded-md w-[80px] ${displayOptions.viewMode == 'list' && 'bg-[#374151]'}`}
              onClick={() => onSelect('viewMode', 'list')}
            >
              <img src={listIcon} className="invert h-[30px] mx-auto" alt="" />
              <p className="text-center">List</p>
            </div>
            <div
              className={`border-2 p-1 border-[#1F2937] rounded-md w-[80px] ${displayOptions.viewMode == 'board' && 'bg-[#374151]'}`}
              onClick={() => {
                onSelect('viewMode', 'board');
                if (displayOptions.groupBy == 'no_group') {
                  onSelect('groupBy', 'category');
                }
              }}
            >
              <img src={boardIcon} className="invert h-[30px] mx-auto" alt="" />
              <p className="text-center">Board</p>
            </div>
          </div>

          <div className="flex   mt-4">
            <p className="mr-3">Group by</p>
            <SelectOptions
              classForSelected="border border-gray-500 px-2  rounded-md py-[1px]"
              classForList="bg-[#030712] border border-[#2a2a2a] p-1"
              selectedOption={displayOptions.groupBy}
              options={['no_group', 'category', 'priority']}
            >
              {options =>
                options.map(option => (
                  <li
                    className={`${option == displayOptions.groupBy && 'bg-[#1f2937]'} rounded-md px-2 py-0.5`}
                    onClick={() => onSelect('groupBy', option)}
                    key={option}
                  >
                    {option}
                  </li>
                ))
              }
            </SelectOptions>
          </div>

          <div className="flex mt-2">
            <p className="mr-3">Order by</p>
            <SelectOptions
              classForSelected="border border-gray-500 px-2 rounded-md py-[1px]"
              classForList="bg-[#030712] border border-[#2a2a2a] p-1"
              selectedOption={displayOptions.orderBy}
              options={['created_at', 'updated_at', 'category', 'priority']}
            >
              {options =>
                options.map(option => (
                  <li
                    className={`${option == displayOptions.groupBy && 'bg-[#1f2937]'} rounded-md px-2 py-0.5`}
                    onClick={() => onSelect('orderBy', option)}
                    key={option}
                  >
                    {option}
                  </li>
                ))
              }
            </SelectOptions>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayOptions;
