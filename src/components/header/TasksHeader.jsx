import React from 'react';

function TasksHeader() {
  return (
    <header className="h-[50px] md:h-[70px] px-4 border-b border-[#2a2a2a]">
      <nav className="h-full">
        <ul className="flex items-center h-full text-white gap-4">
          <li className="flex-1">
            <input
              className="w-full h-[36px]  border border-[#1F2937] rounded-md px-3 focus:outline-none text-white "
              type="text"
              placeholder="Search..."
            />
          </li>

          <li className="flex items-center cursor-pointer">
            <p>Theme</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TasksHeader;
