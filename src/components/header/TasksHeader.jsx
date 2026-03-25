import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

function TasksHeader({ search, onSearchChange }) {
  const { darkTheme } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    if (darkTheme) {
      dispatch(uiActions.setDarkTheme(false));
      document.documentElement.classList.remove('dark');
    } else {
      dispatch(uiActions.setDarkTheme(true));
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="h-[50px] md:h-[82px] px-4 border-b border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#030712]">
      <nav className="h-full">
        <ul className="flex items-center h-full gap-4">
          <li className="flex-1">
            <input
              className="w-full h-[36px] border border-gray-300 dark:border-[#1F2937] rounded-md px-3 focus:outline-none bg-white dark:bg-transparent text-black dark:text-white placeholder:text-gray-500"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={onSearchChange}
            />
          </li>

          <li
            onClick={onClickHandler}
            className="flex items-center cursor-pointer select-none text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
          >
            {darkTheme ? 'Dark' : 'Light'}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TasksHeader;
