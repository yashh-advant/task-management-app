import React from 'react';
import { useNavigate } from 'react-router';

function NoProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#030712] items-center justify-center text-center px-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl md:text-3xl text-black dark:text-white font-semibold mb-3">
          No Projects Yet
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6">
          You haven’t added any projects yet. Start by creating a new project to manage your tasks
          efficiently.
        </p>

        <button
          onClick={() => navigate('/new-project')}
          className="px-4 py-2 rounded-md bg-green-200 text-black hover:bg-green-300 transition"
        >
          + Add New Project
        </button>
      </div>
    </div>
  );
}

export default NoProjects;
