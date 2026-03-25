import React, { useState } from 'react';
import { priorityOptions } from '../utils/constant';

function FilterOptions({ selectedOptions, onSelect }) {
  const filterOptions = {
    priority: [1, 2, 3, 4, 5],
    category: ['todo', 'pending', 'completed'],
  };
  const [showOptions, setShowOptions] = useState(false);
  const [hover, setHover] = useState(null);

  return (
    <div className="ml-4">
      <div className="relative">
        <p onClick={() => setShowOptions(prev => !prev)}>Filter</p>
  
        {showOptions && (
          <div className="absolute z-20 bg-white dark:bg-[#030712] border border-gray-500 p-2 rounded-md text-black dark:text-white">
            <ul className="flex flex-col gap-2">
              {Object.keys(filterOptions).map(key => (
                <li
                  key={key}
                  className="relative"
                  onMouseEnter={() => setHover(key)}
                  onMouseLeave={() => setHover(null)}
                >
                  <p
                    className={`py-[2px] px-2 rounded-md
                      ${key === hover ? 'bg-green-100 dark:bg-[#1f2937]' : ''}`}
                  >
                    {key}
                  </p>
  
                  {hover === key && (
                    <div
                      className="absolute bg-white dark:bg-[#030712] z-20 min-w-[120px] ml-18 top-0 border border-gray-500 p-2 rounded-md"
                    >
                      <ul className="flex flex-col gap-2">
                        {filterOptions[key].map(option => (
                          <li
                            key={option}
                            className={`rounded-md pl-2
                              ${
                                selectedOptions[key].includes(option)
                                  ? 'bg-green-100 dark:bg-[#1f2937]'
                                  : ''
                              }
                              hover:bg-green-100 dark:hover:bg-[#1f2937]`}
                            onClick={() =>
                              onSelect(
                                key,
                                option,
                                selectedOptions[key].includes(option)
                              )
                            }
                          >
                            {key === 'priority'
                              ? priorityOptions[option - 1]
                              : option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterOptions;
