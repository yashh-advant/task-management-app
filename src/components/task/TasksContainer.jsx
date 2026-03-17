import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import DisplayOptions from '../DisplayOptions';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../../store/task-slice';
import TasksHeader from '../header/TasksHeader';
import Tasks from './Tasks';

function TasksContainer() {
  const projectId = useOutletContext();
  const { tasks } = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState('list');
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem(projectId)) || [];
    dispatch(taskActions.setTasks(tasks || []));
  }, [dispatch, projectId]);
  console.log(tasks);

  const handleSelectMode = mode => setViewMode(mode);
  const pendingTasks = tasks.filter(task => task.category == 'pending');
  const completedTasks = tasks.filter(task => task.category == 'completed');
  const todoTasks = tasks.filter(task => task.category == 'todo');

  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <TasksHeader />
        <DisplayOptions currentMode={viewMode} onSelectMode={handleSelectMode} />
        {tasks.length == 0 && <p className="text-white ml-4">No tasks found</p>}
        <div className={`${viewMode == 'list' ? 'flex flex-col' : 'flex  overflow-x-auto '}`}>
          <Tasks classes="bg-[#2a2a2a]" viewMode={viewMode} tasks={todoTasks} title="Todo" />
          <Tasks classes="bg-gray-600" viewMode={viewMode} tasks={pendingTasks} title="Pending" />
          <Tasks
            classes="bg-green-500"
            viewMode={viewMode}
            tasks={completedTasks}
            title="Completed"
          />
        </div>
      </div>
    </>
  );
}

export default TasksContainer;
