import React from 'react';
import { priorityOptions } from '../../utils/constant';

function Task({ viewMode, task }) {
  return (
    <div
      className={`flex flex-col text-white ${viewMode === 'board' ? 'min-w-[300px] ' : ''} border border-gray-500 rounded-lg my-2 p-1`}
    >
      <div className="flex gap-3 ">
        <p>{task.category}</p>
        <h2 className="line-clamp-1">{task.title}</h2>
      </div>
      <div>
        <p>{priorityOptions[task.priority - 1]}</p>
        <p>{task.due_Date}</p>
      </div>
    </div>
  );
}

export default Task;
