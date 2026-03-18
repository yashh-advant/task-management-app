import React, { useState } from 'react';
import CategoryIcon from '../Icons/CategoryIcon';
import PriorityIcon from '../Icons/PriorityIcon';
import SelectOptions from '../SelectOptions';
import { priorityOptions } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store/task-slice';
import { Link, useOutletContext } from 'react-router';

function Task({ isListMode, task }) {
  const projectId = useOutletContext();
  const [taskDetails, setTaskDetails] = useState(task);
  const dispatch = useDispatch();

  const updateTask = (key, value) => {
    const updated = { ...taskDetails, [key]: value };
    const tasks = JSON.parse(localStorage.getItem(projectId));
    const updatedTasks = tasks.map(task => (task.id == taskDetails.id ? updated : task));
    localStorage.setItem(projectId, JSON.stringify(updatedTasks));
    setTaskDetails(updated);
    dispatch(taskActions.editTask(updated));
  };

  return (
    <div
      draggable
      className={`flex items-center hover:bg-[#1f2937] text-white ${!isListMode && 'min-w-[300px] bg-[#171f2c]'} mx-2 rounded-lg my-4 p-1`}
    >
      <div
        className={`flex gap-3 items-center ${!isListMode && 'flex-col-reverse justify-start items-start'}`}
      >
        <SelectOptions
          classForList="border border-gray-500 bg-[#030712] p-2 gap-2"
          options={[5, 4, 3, 2, 1]}
          selectedOption={<PriorityIcon priority={taskDetails.priority} />}
        >
          {options =>
            options.map(option => (
              <li
                key={option}
                className={`flex gap-2 px-1 items-center rounded-md py-[2px] ${option === taskDetails.priority ? 'bg-[#1f2937]' : ''} hover:bg-[#1f2937]`}
                onClick={() => updateTask('priority', option)}
              >
                <PriorityIcon priority={option} />
                <p>{priorityOptions[option - 1]}</p>
              </li>
            ))
          }
        </SelectOptions>

        <div className="flex gap-2 m-1">
          <SelectOptions
            classForList="border border-gray-500 bg-[#030712] p-2 gap-2"
            options={['todo', 'pending', 'completed']}
            selectedOption={<CategoryIcon category={taskDetails.category} />}
          >
            {options =>
              options.map(option => (
                <li
                  key={option}
                  className={`flex gap-2 px-1 rounded-md py-[2px] ${option === taskDetails.category ? 'bg-[#1f2937]' : ''} hover:bg-[#1f2937]`}
                  onClick={() => updateTask('category', option)}
                >
                  <CategoryIcon category={option} />
                  <p>{option}</p>
                </li>
              ))
            }
          </SelectOptions>
          <Link to={`/tasks/${task.id}`} className="line-clamp-1 ml-2">
            {taskDetails.title}
          </Link>
        </div>
      </div>

      <div className="ml-auto text-right">
        {/* <p>
          {taskDetails.due_date &&
            new Date(taskDetails.due_date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
            })}
        </p> */}
        <p>
          {taskDetails.created_at &&
            new Date(taskDetails.created_at).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
            })}
        </p>
      </div>
    </div>
  );
}

export default Task;
