import React, { useState } from 'react';
import Task from './Task';
import DisplayOptions from '../DisplayOptions';
import { createGroup } from '../../utils/grouping-function';

function Tasks({ tasks }) {
  const [displayOptions, setDisplayOptions] = useState({
    viewMode: 'list',
    groupBy: 'no_group',
    orderBy: 'due_Date',
  });

  console.log(displayOptions);

  const handleOnChange = (identifier, value) => {
    setDisplayOptions(prev => ({
      ...prev,
      [identifier]: value,
    }));
  };

  const groupedTasks = createGroup(displayOptions.groupBy, tasks);

  console.log(groupedTasks);

  const isListMode = displayOptions.viewMode == 'list';

  return (
    <>
      <DisplayOptions displayOptions={displayOptions} onSelect={handleOnChange} />
      <div className={`flex ${isListMode && 'flex-col '} gap-2 overflow-y-auto ml-1.5`}>
        {Object.entries(groupedTasks).map(array => {
          return (
            <div key={array?.[0]} className={`${!isListMode && 'bg-[#090e1b] rounded-md'} `}>
              <p className={`text-white pl-2 ${!isListMode && 'text-center mt-2'}`}>{array?.[0]}</p>
              {array?.[1].map(task => (
                <Task key={task.id} isListMode={isListMode} task={task} />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tasks;
