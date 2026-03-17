import React, { useRef } from 'react';
import addIcon from '../../assets/add.png';
import avatar from '../../assets/avatar.png';
import ProjectList from './ProjectList';
import TaskForm from '../task/TaskForm';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store/task-slice';
function Sidebar({ selectedProject, projects, onSelectProject }) {
  const formRef = useRef();
  const dispatch = useDispatch();
  const handleShowForm = () => {
    formRef.current.open();
  };

  const handleAddTask = newTask => {
    const task = { ...newTask, id: Math.random() };
    const tasks = JSON.parse(localStorage.getItem(selectedProject.id)) || [];
    tasks.push(task);
    localStorage.setItem(selectedProject.id, JSON.stringify(tasks));
    dispatch(taskActions.addTask(task));
  };

  return (
    <>
      <TaskForm ref={formRef} onAddTask={handleAddTask} />
      <section className=" border min-h-screen  md:w-[200px] lg:w-[300px] w-[80px] border-r-[#2a2a2a]">
        <ul className="flex text-white h-full justify-start flex-col ">
          <li>
            <ProjectList
              currentProject={selectedProject}
              projects={projects}
              onSelectProject={onSelectProject}
            />
          </li>
          <li className="mt-5 mx-auto">
            <div className="flex items-center justify-start gap-2" onClick={handleShowForm}>
              <img className="mx-auto md:ml-auto invert h-[20px]" src={addIcon} alt="Add Icon" />
              <button className="hidden md:block">Add Task</button>
            </div>
          </li>
          <li className="mt-auto">
            <div className="flex   items-center mb-4 justify-start gap-2">
              <img className="p-2 mx-auto md:mx-3 h-[50px]" src={avatar} alt="avatar" />
              <p className="hidden md:block"> Name </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Sidebar;
