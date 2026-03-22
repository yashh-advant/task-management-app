import React, { useState } from 'react';
import CategoryIcon from '../Icons/CategoryIcon';
import PriorityIcon from '../Icons/PriorityIcon';
import SelectOptions from '../SelectOptions';
import { priorityOptions } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store/task-slice';
import { Link, useOutletContext } from 'react-router';
import { useDraggable } from '@dnd-kit/core';

function Task({ isListMode, task }) {
  const { setNodeRef, listeners, attributes } = useDraggable({
    id: task.id,
  });
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
      className={`flex items-center 
        hover:bg-green-100 dark:hover:bg-[#1f2937]
        ${!isListMode ? 'min-w-[300px] bg-white dark:bg-[#171f2c] border dark:border-none' : ''}
        mx-2 rounded-lg my-4 p-1`}
    >
      <div
        className={`flex gap-3 flex-1 items-center 
          ${!isListMode ? 'flex-col-reverse justify-start items-start' : ''}`}
      >
        <SelectOptions
          classForList="p-2 gap-2"
          options={[5, 4, 3, 2, 1]}
          selectedOption={<PriorityIcon priority={taskDetails.priority} />}
        >
          {options =>
            options.map(option => (
              <li
                key={option}
                className={`flex gap-2 px-1 items-center rounded-md py-[2px]
                  ${option === taskDetails.priority ? 'bg-green-100 dark:bg-[#1f2937]' : ''}
                  hover:bg-green-100 dark:hover:bg-[#1f2937]`}
                onClick={() => updateTask('priority', option)}
              >
                <PriorityIcon priority={option} />
                <p>{priorityOptions[option - 1]}</p>
              </li>
            ))
          }
        </SelectOptions>

        <div className="flex w-full gap-2 m-1">
          <SelectOptions
            classForList="p-2 gap-2"
            options={['todo', 'pending', 'completed']}
            selectedOption={<CategoryIcon category={taskDetails.category} />}
          >
            {options =>
              options.map(option => (
                <li
                  key={option}
                  className={`flex gap-2 px-1 items-center rounded-md py-[2px]
                    ${option === taskDetails.category ? 'bg-green-100 dark:bg-[#1f2937]' : ''}
                    hover:bg-green-100 dark:hover:bg-[#1f2937]`}
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

          <div className="flex-1" ref={setNodeRef} {...listeners} {...attributes}></div>
        </div>
      </div>

      <div className="ml-auto text-right">
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
