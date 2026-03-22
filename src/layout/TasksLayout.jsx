import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';

function TasksLayout() {
  const projects = JSON.parse(localStorage.getItem('projects'));
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelectProject = projectDetails => {
    setSelectedProject(projectDetails);
    navigate('/tasks');
  };
  return (
    <>
      <div
        className={`flex  dark:text-white  bg-white dark:bg-[#030712] text-black  min-h-screen w-full`}
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
