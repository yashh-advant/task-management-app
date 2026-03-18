import React from 'react';
import SelectOptions from '../SelectOptions';

function TasksHeader({ search, onSearchChange }) {
  
  const onClickHandler = (theme) => {
    if(theme != 'System'){
      document.documentElement.classList = ''
      document.documentElement.classList.add(theme)
    }
  }

  return (
    <header className="h-[50px] md:h-[82px] px-4 border-b border-[#2a2a2a]">
      <nav className="h-full">
        <ul className="flex items-center h-full text-white gap-4">
          <li className="flex-1">
            <input
              className="w-full h-[36px]  border border-[#1F2937] rounded-md px-3 focus:outline-none text-white "
              type="text"
              placeholder="Search..."
              value={search}
              onChange={onSearchChange}
            />
          </li>

          <li className="flex items-center cursor-pointer">
            <SelectOptions selectedOption='System' options={['System', 'Dark', 'Light']}>
              {options => options.map(option => <li onClick={() => onClickHandler(option)}>{option}</li>)}
            </SelectOptions>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TasksHeader;
