import React, { useState } from 'react';
import listIcon from '../assets/list.png';
import boardIcon from '../assets/board.png';
import SelectOptions from './SelectOptions';
import OrderIcon from './Icons/OrderIcon';

function DisplayOptions({ displayOptions, onSelect }) {
  const [showGridOption, setShowGridOptions] = useState(false);
  const handleDisplayGrid = () => {
    setShowGridOptions(prev => !prev);
  };

  return (
    <div className="relative">
      <button
        className="m-4 border border-[#111827] dark:border-gray-600 rounded-md px-2"
        onClick={handleDisplayGrid}
      >
        Display
      </button>

      {showGridOption && (
        <div
          className="absolute right-0 w-[220px] bg-white dark:bg-[#111827]
          h-[165px] rounded-md top-full z-20 mr-4 border-2 border-[#1F2937]
          flex flex-col p-2 text-black dark:text-white"
        >
          <div className="flex gap-2 h-[70px]">
            <div
              className={`border-2 p-1 flex-1 border-[#1F2937] rounded-md w-[80px]
                ${displayOptions.viewMode === 'list' ? 'bg-green-100 dark:bg-[#374151]' : ''}`}
              onClick={() => onSelect('viewMode', 'list')}
            >
              <img src={listIcon} className="h-[30px] mx-auto dark:invert" alt="" />
              <p className="text-center">List</p>
            </div>

            <div
              className={`border-2 p-1 flex-1 border-[#1F2937] rounded-md w-[80px]
                ${displayOptions.viewMode === 'board' ? 'bg-green-100 dark:bg-[#374151]' : ''}`}
              onClick={() => {
                onSelect('viewMode', 'board');
                if (displayOptions.groupBy === 'no_group') {
                  onSelect('groupBy', 'category');
                }
              }}
            >
              <img src={boardIcon} className="h-[30px] mx-auto dark:invert" alt="" />
              <p className="text-center">Board</p>
            </div>
          </div>

          <div className="flex-1 flex mt-4">
            <p className="mr-3">Group by</p>
            <SelectOptions
              classForSelected="border border-gray-500 px-2 rounded-md py-[1px]"
              classForList="border border-[#2a2a2a] p-1 bg-white dark:bg-[#030712]"
              selectedOption={displayOptions.groupBy}
              options={['no_group', 'category', 'priority']}
            >
              {options =>
                options.map(option => (
                  <li
                    key={option}
                    className={`rounded-md px-2 py-0.5
                      ${option === displayOptions.groupBy ? 'bg-green-100 dark:bg-[#1f2937]' : ''}
                      hover:bg-green-100 dark:hover:bg-[#1f2937]`}
                    onClick={() => onSelect('groupBy', option)}
                  >
                    {option}
                  </li>
                ))
              }
            </SelectOptions>
          </div>

          <div className="flex mt-2 items-center">
            <p className="mr-3">Order by</p>
            <SelectOptions
              classForSelected="border border-gray-500 px-2 rounded-md py-[1px]"
              classForList="p-1 bg-white dark:bg-[#030712]"
              selectedOption={displayOptions.orderBy}
              options={['created_at', 'updated_at', 'category', 'priority', 'title']}
            >
              {options =>
                options.map(option => (
                  <li
                    key={option}
                    className={`rounded-md px-2 py-0.5
                      ${option === displayOptions.orderBy ? 'bg-green-100 dark:bg-[#1f2937]' : ''}
                      hover:bg-green-100 dark:hover:bg-[#1f2937]`}
                    onClick={() => onSelect('orderBy', option)}
                  >
                    {option}
                  </li>
                ))
              }
            </SelectOptions>

            <div
              onClick={() => onSelect('ascOrder', !displayOptions.ascOrder)}
              className="border ml-1 border-gray-500 px-1 rounded-md py-[3px]"
              title={displayOptions.ascOrder ? 'Ascending Order' : 'Descending Order'}
            >
              <OrderIcon ascOrder={displayOptions.ascOrder} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayOptions;
