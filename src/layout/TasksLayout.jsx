import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/sidebar/Sidebar';

function TasksLayout() {
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

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelectProject = projectDetails => {
    setSelectedProject(projectDetails);
  };
  return (
    <>
      <div className="flex bg-[#030712] min-h-screen w-full">
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
