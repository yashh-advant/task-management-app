import React from 'react';
import Task from './Task';

function Tasks({ viewMode, classes, tasks, title }) {
  return (
    <>
      {tasks.length && (
        <div className={`flex flex-col ${viewMode === 'board' ? 'min-w-[300px]' : ''}`}>
          <p className={`text-white  ${classes}`}>{title}</p>
          <ul className=" m-2">
            {tasks.map(task => (
              <Task viewMode={viewMode} key={task.id} task={task} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Tasks;
