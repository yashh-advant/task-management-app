import React, { useState } from 'react';
import SelectOptions from './SelectOptions';
import { useSelector } from 'react-redux';
import { priorityOptions } from '../utils/constant';

function FilterOptions({ selectedOptions, onSelect }) {
  const filterOptions = {
    priority: [1, 2, 3, 4, 5],
    category: ['todo', 'pending', 'completed'],
  };
  const [showOptions, setShowOptions] = useState(false);
  const [hover, setHover] = useState(null);
  const { darkTheme } = useSelector(state => state.ui);

  return (
    <div className="ml-4">
      <div className="relative ">
        <p onClick={() => setShowOptions(prev => !prev)}>Filter</p>
        {showOptions && (
          <div
            className={`absolute z-20 ${darkTheme ? 'bg-[#030712]' : 'bg-white'} border border-gray-500 p-2 rounded-md`}
          >
            <ul className="flex flex-col gap-2">
              {Object.keys(filterOptions).map(key => (
                <li
                  className="relative"
                  onMouseEnter={() => setHover(key)}
                  onMouseLeave={() => setHover(null)}
                >
                  <p
                    className={`${key == hover && (darkTheme ? 'bg-[#1f2937]' : 'bg-green-100')} py-[2px] px-2 rounded-md`}
                  >
                    {key}
                  </p>
                  {hover == key && (
                    <div
                      className={`absolute ${darkTheme ? 'bg-[#030712]' : 'bg-white'} z-20 min-w-[120px] ml-18 top-0 border border-gray-500 p-2 rounded-md`}
                    >
                      <ul className="flex flex-col gap-2">
                        {filterOptions[key].map(option => (
                          <li
                            className={`${selectedOptions[key].includes(option) && (darkTheme ? 'bg-[#1f2937]' : 'bg-green-100')} ${darkTheme ? 'hover:bg-[#1f2937]' : 'hover:bg-green-100'} rounded-md pl-2`}
                            onClick={() =>
                              onSelect(key, option, selectedOptions[key].includes(option))
                            }
                          >
                            {key == 'priority' ? priorityOptions[option - 1] : option}
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
