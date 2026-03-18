import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { taskActions } from '../../store/task-slice';
import TasksHeader from '../header/TasksHeader';
import Tasks from './Tasks';

function TasksContainer() {
  const [searchText, setSearchText] = useState('');

  const projectId = useOutletContext();
  const { tasks } = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem(projectId)) || [];
    dispatch(taskActions.setTasks(tasks || []));
  }, [dispatch, projectId]);
  console.log(tasks);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col min-h-screen w-full overflow-hidden">
        <TasksHeader search={searchText} onSearchChange={e => setSearchText(e.target.value)} />
        {tasks.length == 0 && <p className="text-white ml-4">No tasks found</p>}
        <Tasks tasks={filteredTasks} />
      </div>
    </>
  );
}

export default TasksContainer;
