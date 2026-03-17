import React, { useEffect, useState } from 'react';
import PriorityIcon from '../Icons/PriorityIcon';
import CategoryIcon from '../Icons/CategoryIcon';
import { priorityOptions } from '../../utils/constant';
import { useOutletContext, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store/task-slice';

function TaskDetails() {
  const [taskDetails, setTaskDetails] = useState({
    title: '',
    description: '',
    priority: 5,
    due_date: new Date(),
    category: '',
  });
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const projectId = useOutletContext();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem(projectId)) || [];
    const fiteredTask = tasks.filter(task => task.id == taskId);
    setTaskDetails(fiteredTask[0]);
  }, [projectId, taskId]);

  const onChangeHandler = (identifier, val) => {
    setTaskDetails(prev => {
      const updatedTask = {
        ...prev,
        [identifier]: val,
      };
      const tasks = JSON.parse(localStorage.getItem(projectId)) || [];
      const updatedTasks = tasks.map(task => (task.id == taskId ? updatedTask : task));
      localStorage.setItem(projectId, JSON.stringify(updatedTasks));
      dispatch(taskActions.editTask(updatedTask));
      return updatedTask;
    });
  };

  return (
    <div className="text-white w-full">
      <div className="h-[50px] md:h-[70px] border-b border-[#2a2a2a]">header</div>

      <div className="flex flex-col md:flex-row mt-3 md:p-4 p-4">
        <div className="md:p-4 flex-1 md:border-r border-gray-500 min-w-fit mb-3 pb-4 md:mb-0 border-b md:border-b-0 flex flex-col gap-2">
          <input
            type="text"
            value={taskDetails.title || ''}
            className="bg-transparent md:text-2xl font-semibold focus:outline-none"
            onChange={event => onChangeHandler('title', event.target.value)}
          />

          <textarea
            value={taskDetails.description || ''}
            placeholder="Description"
            className="bg-transparent focus:outline-none"
            onChange={event => onChangeHandler('description', event.target.value)}
          />
        </div>

        <div className="p-4">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4">
              <PriorityIcon priority={taskDetails.priority} />
              <p>{priorityOptions[taskDetails.priority - 1]}</p>
            </li>

            <li className="flex items-center gap-4">
              <CategoryIcon category={taskDetails.category} />
              <p>{taskDetails.category}</p>
            </li>

            <li className="flex items-center gap-4">
              <input
                type="date"
                value={
                  taskDetails.due_date
                    ? new Date(taskDetails.due_date).toLocaleDateString('en-CA')
                    : ''
                }
                onChange={event => onChangeHandler('due_date', event.target.value)}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
