import React, { useEffect, useState } from 'react';
import PriorityIcon from '../Icons/PriorityIcon';
import CategoryIcon from '../Icons/CategoryIcon';
import { priorityOptions } from '../../utils/constant';
import { useOutletContext, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store/task-slice';
import SelectOptions from '../SelectOptions';
import TaskDetailsHeader from '../header/TaskDetailsHeader';

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
    <div className="w-full">
      <TaskDetailsHeader projectId={projectId} taskId={taskId} />

      <div className="flex flex-col md:flex-row mt-3 md:p-4 p-4">
        <div className="md:p-4 flex-1 md:border-r border-gray-500 min-w-fit mb-3 pb-4 md:mb-0 border-b md:border-b-0 flex flex-col gap-2">
          <input
            type="text"
            value={taskDetails.title || ''}
            className="bg-transparent md:text-2xl font-semibold focus:outline-none placeholder:bg-gray-500"
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
              <SelectOptions
                classForList="p-2 gap-2"
                options={[5, 4, 3, 2, 1]}
                selectedOption={
                  <div className="flex items-center gap-2">
                    <PriorityIcon priority={taskDetails.priority} />
                    <p>{priorityOptions[taskDetails.priority - 1]}</p>
                  </div>
                }
              >
                {options =>
                  options.map(option => (
                    <li
                      key={option}
                      className={`flex gap-2 px-1 items-center rounded-md py-[2px]
                        ${option === taskDetails.priority ? 'bg-green-100 dark:bg-[#1f2937]' : ''}
                        hover:bg-green-100 dark:hover:bg-[#1f2937]`}
                      onClick={() => onChangeHandler('priority', option)}
                    >
                      <PriorityIcon priority={option} />
                      <p>{priorityOptions[option - 1]}</p>
                    </li>
                  ))
                }
              </SelectOptions>
            </li>

            <li className="flex items-center gap-4">
              <SelectOptions
                classForList="p-2 gap-2"
                options={['todo', 'pending', 'completed']}
                selectedOption={
                  <div className="flex items-center gap-2">
                    <CategoryIcon category={taskDetails.category} />
                    <p>{taskDetails.category}</p>
                  </div>
                }
              >
                {options =>
                  options.map(option => (
                    <li
                      key={option}
                      className={`flex gap-2 px-1 items-center rounded-md py-[2px]
                        ${option === taskDetails.category ? 'bg-green-100 dark:bg-[#1f2937]' : ''}
                        hover:bg-green-100 dark:hover:bg-[#1f2937]`}
                      onClick={() => onChangeHandler('category', option)}
                    >
                      <CategoryIcon category={option} />
                      <p>{option}</p>
                    </li>
                  ))
                }
              </SelectOptions>
            </li>

            <li className="flex items-center gap-4">
              <input
                type="date"
                className="bg-transparent dark:bg-[#1f2937] px-2 py-1 rounded-md"
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
