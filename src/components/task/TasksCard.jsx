import React from 'react';
import { priorityOptions } from '../../utils/constant';
import Task from './Task';
import { useDroppable } from '@dnd-kit/core';
import { useSelector } from 'react-redux';

function TasksCard({ isListMode, array, displayOptions }) {
  const { darkTheme } = useSelector(state => state.ui);

  const { setNodeRef } = useDroppable({
    id: array[0],
  });

  return (
    <div ref={setNodeRef} className={`${!isListMode && ` ${darkTheme ? 'bg-[#090e1b]' : 'border'} rounded-md`} `}>
      <p className={` pl-2 ${!isListMode && 'text-center mt-2'}`}>
        {displayOptions.groupBy == 'priority' ? priorityOptions[array?.[0] - 1] : array?.[0]}
      </p>
      {array?.[1].map(task => (
        <Task key={task.id} isListMode={isListMode} task={task} />
      ))}
    </div>
  );
}

export default TasksCard;
