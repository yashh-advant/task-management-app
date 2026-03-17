import React from 'react';
import { NavLink } from 'react-router';

function Header() {
  return (
    <header className=" border-b md:h-[60px] border-gray-800 md:text-3xl h-[50px] px-5  flex items-center w-full">
      <nav className=" w-full">
        <ul className="flex justify-between items-center gap-6 text-sm md:text-lg text-gray-200">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-white border-b border-white pb-1' : 'hover:text-gray-400'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex gap-4 ml-auto items-center m-2">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? 'text-white border-b border-white pb-1' : 'hover:text-gray-400'
              }
            >
              Signup
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-white border-b border-white pb-1' : 'hover:text-gray-400'
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
