import React from 'react';
import CategoryIcon from '../Icons/CategoryIcon';
import PriorityIcon from '../Icons/PriorityIcon';
import { Link } from 'react-router';

function Task({ isListMode, task }) {
  return (
    <Link
      to={`/tasks/${task.id}`}
      className={`flex flex-col text-white ${!isListMode && 'min-w-[300px] bg-[#171f2c]'} mx-2 rounded-lg my-4  p-1`}
    >
      <div
        className={`flex gap-3 items-center ${!isListMode && 'flex-col-reverse justify-start items-start'}`}
      >
        <PriorityIcon priority={task.priority} />
        <div className="flex gap-2 m-1">
          <CategoryIcon category={task.category} />
          <h2 className="line-clamp-1">{task.title}</h2>
        </div>
      </div>
      <div className="ml-auto">
        <p>{task.due_Date}</p>
      </div>
    </Link>
  );
}

export default Task;
