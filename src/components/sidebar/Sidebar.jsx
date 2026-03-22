import React, { useRef, useState } from 'react';
import addIcon from '../../assets/add.png';
import avatar from '../../assets/avatar.png';
import ProjectList from './ProjectList';
import TaskForm from '../task/TaskForm';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store/task-slice';
import { Link } from 'react-router';
function Sidebar({ selectedProject, projects, onSelectProject }) {
  const [projectList, setProjectList] = useState(projects);
  const [projectName, setProjectName] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const formRef = useRef();
  const dispatch = useDispatch();
  const handleShowForm = () => {
    formRef.current.open();
  };

  const handleAddForm = () => {
    setShowAddForm(prev => !prev);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!projectName.trim()) {
      return;
    }
    const newProject = { name: projectName, id: Math.random() };
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    localStorage.setItem('projects', JSON.stringify([...storedProjects, newProject]));
    setProjectList(prev => [...prev, newProject]);
    setShowAddForm(false);
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
      <section className="border-r  md:w-[200px] lg:w-[300px] w-[120px] border-[#2a2a2a]">
        <ul className="flex h-full justify-start flex-col ">
          <li>
            <ProjectList
              currentProject={selectedProject}
              projects={projectList}
              onSelectProject={onSelectProject}
            />
          </li>
          <li className="mt-5 mx-auto relative">
            <button onClick={handleAddForm}>Add Project</button>

            {showAddForm && (
              <form
                onSubmit={handleSubmit}
                className="absolute top-full left-0 mt-2 w-[200px] bg-white dark:bg-[#030712] border border-gray-500 rounded-md p-3 flex flex-col gap-2 z-50"
              >
                <input
                  type="text"
                  placeholder="Project name"
                  value={projectName}
                  onChange={e => setProjectName(e.target.value)}
                  className="border border-gray-500 px-2 py-1 rounded-md bg-transparent focus:outline-none"
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-2 py-1 rounded-md hover:bg-green-100 dark:hover:bg-[#1f2937]"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-2 py-1 rounded-md bg-green-200 dark:bg-[#1f2937]"
                  >
                    Add
                  </button>
                </div>
              </form>
            )}
          </li>
          <li className="mt-5 mx-auto">
            <Link to="/tasks" className="flex items-center justify-start gap-2">
              All Tasks
            </Link>
          </li>
          <li className="mt-5 mx-auto">
            <div className="flex items-center justify-start gap-2" onClick={handleShowForm}>
              <img
                className={`mx-auto md:ml-auto dark:invert  h-[20px]`}
                src={addIcon}
                alt="Add Icon"
              />
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
