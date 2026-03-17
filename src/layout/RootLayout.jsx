import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router';

function RootLayout() {
  return (
    <div className='bg-[#030712] min-w-screen min-h-screen'>
      <Header />
      <Outlet />
    </div>
  );
}

export default RootLayout;
