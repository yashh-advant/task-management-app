import React from 'react';

function Home() {
  return (
    <div className="min-h-[calc(100vh-60px)] flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-2xl md:text-3xl text-white font-semibold mb-3">
          Let’s Manage Tasks Efficiently and Easily
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Organize your work, stay focused, and get things done without stress.
        </p>
      </div>
    </div>
  );
}

export default Home;
