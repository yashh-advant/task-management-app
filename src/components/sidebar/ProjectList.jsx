import React, { useState } from 'react';
import checkIcon from '../../assets/check.png';
function ProjectList({ projects, currentProject, onSelectProject }) {
  console.log(currentProject);
  const [showProjects, setShowProjects] = useState(false);
  const handleShowProjects = () => {
    setShowProjects(prev => !prev);
  };

  const handleSelectProject = project => {
    onSelectProject(project);
    setShowProjects(false);
  };

  return (
    <div className="relative flex items-center h-[50px] md:h-[70px] border-b border-[#2a2a2a]">
      <div className="text-center mx-auto" title={currentProject.name} onClick={handleShowProjects}>
        {currentProject.name}
      </div>
      {showProjects && (
        <div className="absolute z-10 border rounded-md p-4 mt-36 border-[#1F2937] ml-24 w-[200px] bg-[#111827]">
          <p className=" text-blue-400">Switch Project</p>
          <ul className="flex flex-col ">
            {projects.map(project => (
              <li
                className="cursor-pointer flex justify-start items-center"
                key={project.id}
                onClick={() => handleSelectProject(project)}
              >
                <p className="mr-2">{project.name}</p>
                {project.name == currentProject.name && (
                  <img className="h-[15px] invert" src={checkIcon} />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
