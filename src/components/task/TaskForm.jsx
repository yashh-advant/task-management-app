import React, { useImperativeHandle, useRef, useState } from 'react';
import SelectOptions from '../SelectOptions';
import { priorityOptions } from '../../utils/constant';
import CategoryIcon from '../Icons/CategoryIcon';
import { useSelector } from 'react-redux';

const initialState = {
  title: '',
  description: '',
  priority: 5,
  due_date: new Date().toISOString().slice(0, 10),
  category: 'todo',
};

function TaskForm({ ref, onAddTask }) {
  const [taskDetails, setTaskDetails] = useState(initialState);
  const { darkTheme } = useSelector(state => state.ui);
  const [error, setError] = useState(null);

  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
    };
  });

  const handleSubmit = event => {
    event.preventDefault();
    if (!taskDetails.title) {
      setError('Title Is Required');
      return;
    }
    onAddTask({ ...taskDetails, created_at: new Date().toISOString() });
    setTaskDetails(initialState);
    dialogRef.current.close();
  };

  const handleOnChange = (identifier, value) => {
    setTaskDetails(prev => ({ ...prev, [identifier]: value }));
  };

  const handleClose = () => {
    setError(null);
    setTaskDetails(initialState);
    dialogRef.current.close();
  };

  return (
    <dialog ref={dialogRef} className="bg-transparent min-h-screen min-w-screen z-10">
      <div
        className="bg-transparent backdrop-blur-xs flex justify-center items-center  h-screen"
        onClick={handleClose}
      >
        <form
          className={`${darkTheme ? 'bg-[#030712] text-white' : 'bg-white'} md:px-4 flex flex-col justify-evenly border md:h-[300px] md:w-[500px] border-gray-600 rounded-lg p-2`}
          onSubmit={handleSubmit}
          onClick={e => e.stopPropagation()}
        >
          <div>
            <input
              className="focus:outline-none md:mt-2 "
              type="text"
              id="title"
              placeholder="Title"
              value={taskDetails.title}
              onChange={event => handleOnChange('title', event.target.value)}
            />
          </div>
          <div>
            <input
              className="focus:outline-none"
              type="text"
              id="desc"
              placeholder="Description"
              value={taskDetails.description}
              onChange={event => handleOnChange('description', event.target.value)}
            />
          </div>
          <div className="flex gap-4 border-b border-gray-500 pb-3">
            <SelectOptions
              classForSelected="px-2  rounded-md py-[1px]"
              classForList={`${darkTheme ? 'bg-[#030712]' : 'bg-white'} border border-[#2a2a2a] p-1`}
              selectedOption={
                <div className="flex">
                  <CategoryIcon category={taskDetails.category} />
                  <p>{taskDetails.category}</p>
                </div>
              }
              options={['todo', 'pending', 'completed']}
            >
              {options =>
                options.map(option => (
                  <li
                    key={option}
                    className={`${option == taskDetails.category && `${darkTheme ? 'bg-[#1f2937] ' : 'bg-green-100'}`} ${darkTheme ? 'hover:bg-[#1f2937] ' : 'hover:bg-green-100'} rounded-md px-2 py-0.5`}
                    p-2
                    onClick={() => handleOnChange('category', option)}
                  >
                    <div className="flex p-px gap-2">
                      <CategoryIcon category={option} />
                      <p>{option}</p>
                    </div>
                  </li>
                ))
              }
            </SelectOptions>

            <SelectOptions
              classForSelected="px-2  rounded-md py-[1px]"
              classForList={`${darkTheme ? 'bg-[#030712]' : 'bg-white'} border border-[#2a2a2a] p-1`}
              selectedOption={priorityOptions[taskDetails.priority - 1]}
              options={[5, 4, 3, 2, 1]}
            >
              {options =>
                options.map(option => (
                  <li
                    key={option}
                    className={`${option == taskDetails.priority && `${darkTheme ? 'bg-[#1f2937] ' : 'bg-green-100'}`} ${darkTheme ? 'hover:bg-[#1f2937] ' : 'hover:bg-green-100'} rounded-md px-2 py-0.5`}
                    onClick={() => handleOnChange('priority', option)}
                  >
                    {priorityOptions[option - 1]}
                  </li>
                ))
              }
            </SelectOptions>
            <input
              type="date"
              value={
                taskDetails.due_date
                  ? new Date(taskDetails.due_date).toISOString().slice(0, 10)
                  : ''
              }
              onChange={event => handleOnChange('due_date', event.target.value)}
            />
          </div>

          {error && <p className="m-2 text-red-500">{error}</p>}

          <div className="flex justify-end gap-4 p-3 ">
            <button onClick={handleClose} type="button">
              Cancel
            </button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default TaskForm;
