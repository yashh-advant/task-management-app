import React from 'react';
import { NavLink } from 'react-router';

function Header() {
  return (
    <header className="w-full flex items-center px-5 h-[50px] md:h-[60px] md:text-3xl border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#030712]">
      <nav className=" w-full">
        <ul className="flex justify-between items-center gap-6 text-sm md:text-lg text-gray-800 dark:text-gray-200">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-black dark:text-white border-b border-black dark:border-white pb-1'
                  : 'hover:text-gray-600 dark:hover:text-gray-400'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex gap-4 ml-auto items-center m-2">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? 'text-black dark:text-white border-b border-black dark:border-white pb-1'
                  : 'hover:text-gray-600 dark:hover:text-gray-400'
              }
            >
              Signup
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'text-black dark:text-white border-b border-black dark:border-white pb-1'
                  : 'hover:text-gray-600 dark:hover:text-gray-400'
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
