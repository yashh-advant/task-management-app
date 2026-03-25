import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function AddProject() {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const name = projectName.trim();
    if (!name) return;

    const newProject = {
      id: Date.now(),
      name,
    };

    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];

    localStorage.setItem(
      'projects',
      JSON.stringify([...storedProjects, newProject])
    );

    navigate('/tasks'); // redirect after adding
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#030712] items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-md p-6">
        
        <h1 className="text-2xl text-black dark:text-white font-semibold mb-4">
          Create New Project
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Project Name
            </label>
            <input
              type="text"
              placeholder="e.g. Internship tasks"
              value={projectName}
              onChange={e => setProjectName(e.target.value)}
              className="mt-1 w-full border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-md bg-transparent text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={!projectName.trim()}
            className="px-4 py-2 rounded-md bg-green-200 text-black hover:bg-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Add Project
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddProject;