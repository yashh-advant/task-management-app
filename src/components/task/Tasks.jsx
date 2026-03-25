import React, { useMemo, useState } from 'react';
import DisplayOptions from '../DisplayOptions';
import { createGroup, filterTasks, sortTasks } from '../../utils/utils';
import { DndContext } from '@dnd-kit/core';
import { useOutletContext } from 'react-router';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../store/task-slice';
import TasksCard from './TasksCard';
import FilterOptions from '../FilterOptions';

function Tasks({ tasks }) {
  const [displayOptions, setDisplayOptions] = useState({
    viewMode: 'list',
    groupBy: 'no_group',
    orderBy: 'created_at',
    ascOrder: false,
  });

  const [filterOptions, setFilterOptions] = useState({
    priority: [],
    category: [],
  });

  const projectId = useOutletContext();
  const dispatch = useDispatch();
  // console.log(displayOptions);

  const handleOnChange = (identifier, value) => {
    setDisplayOptions(prev => ({
      ...prev,
      [identifier]: value,
    }));
  };
  console.log(filterOptions);

  const onFilterChange = (key, val, checked) => {
    console.log(key,val,checked);
    
    setFilterOptions(prev => ({
      ...prev,
      [key]: !checked ? [...prev[key], val] : prev[key].filter(v => v !== val),
    }));
  };

  const handleDragEnd = event => {
    const { active, over } = event;
    if (!over || displayOptions.groupBy === 'no_group') return;

    const storedTasks = JSON.parse(localStorage.getItem(projectId)) || [];

    const updatedValue = displayOptions.groupBy === 'priority' ? Number(over.id) : over.id;
    const updatedTasks = storedTasks.map(task =>
      task.id == active.id ? { ...task, [displayOptions.groupBy]: updatedValue } : task
    );
    localStorage.setItem(projectId, JSON.stringify(updatedTasks));
    const updatedTask = updatedTasks.find(t => t.id == active.id);
    if (updatedTask) {
      dispatch(taskActions.editTask(updatedTask));
    }
  };

  const filteredTasks = useMemo(() => {
    return filterTasks(filterOptions, tasks);
  }, [tasks, filterOptions]);

  const groupedTasks = useMemo(() => {
    return createGroup(displayOptions.groupBy, filteredTasks);
  }, [filteredTasks, displayOptions.groupBy]);

  useMemo(() => {
    sortTasks(displayOptions.orderBy, groupedTasks, displayOptions.ascOrder);
  }, [groupedTasks, displayOptions.orderBy, displayOptions.ascOrder]);

  console.log(groupedTasks);

  const isListMode = displayOptions.viewMode == 'list';

  return (
    <>
      <div className="flex justify-between items-center">
        <FilterOptions selectedOptions={filterOptions} onSelect={onFilterChange} />
        <DisplayOptions displayOptions={displayOptions} onSelect={handleOnChange} />
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className={`flex ${isListMode && 'flex-col '} h-full gap-2 overflow-y-auto ml-1.5`}>
          {Object.entries(groupedTasks).map(array => {
            if (array?.[1].length == 0) {
              return;
            }
            return (
              <TasksCard
                key={array?.[0]}
                array={array}
                displayOptions={displayOptions}
                isListMode={isListMode}
              />
            );
          })}
        </div>
      </DndContext>
    </>
  );
}

export default Tasks;
