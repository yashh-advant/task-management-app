import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

function TasksHeader({ search, onSearchChange }) {
  const { darkTheme } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.toggleTheme());
  };

  return (
    <header className="h-[50px] md:h-[82px] px-4 border-b border-[#2a2a2a]">
      <nav className="h-full">
        <ul className="flex items-center h-full gap-4">
          <li className="flex-1">
            <input
              className="w-full h-[36px]  border border-[#1F2937] rounded-md px-3 focus:outline-none placeholder:text-gray-500 "
              type="text"
              placeholder="Search..."
              value={search}
              onChange={onSearchChange}
            />
          </li>

          <li onClick={onClickHandler} className="flex items-center cursor-pointer">
            {darkTheme ? 'Dark' : 'Light'}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TasksHeader;
