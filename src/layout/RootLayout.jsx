import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router';

function RootLayout() {
  return (
    <div className="min-w-screen min-h-screen bg-white text-black dark:bg-[#030712] dark:text-white">
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;
