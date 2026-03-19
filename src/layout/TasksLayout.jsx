import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';
import { useSelector } from 'react-redux';

function TasksLayout() {
  const { darkTheme } = useSelector(state => state.ui);
  const projects = [
    {
      id: 1,
      name: 'Advant Trainee',
    },
    {
      id: 2,
      name: 'Users project',
    },
  ];
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelectProject = projectDetails => {
    setSelectedProject(projectDetails);
    navigate('/tasks')
  };
  return (
    <>
      <div
        className={`flex  bg-[#030712] ${darkTheme ? 'bg-[#030712] text-white' : 'bg-white text-black'}  min-h-screen w-full`}
      >
        <Sidebar
          selectedProject={selectedProject}
          projects={projects}
          onSelectProject={handleSelectProject}
        />
        <Outlet context={selectedProject.id} />
      </div>
    </>
  );
}

export default TasksLayout;
