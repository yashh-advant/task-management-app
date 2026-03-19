import React from 'react';
import { taskActions } from '../../store/task-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function TaskDetailsHeader({ taskId, projectId }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const deleteHandler = () => {
    if (!taskId || !projectId) {
      return;
    }

    const success = confirm('Sure want to delete');
    if (!success) {
      return;
    }
    const tasks = JSON.parse(localStorage.getItem(projectId)) || [];
    const updatedTasks = tasks.filter(task => task.id != taskId);
    localStorage.setItem(projectId, JSON.stringify(updatedTasks));
    dispatch(taskActions.removeTask(taskId));
    navigate('/tasks');
  };

  return (
    <div className="h-[50px] px-2 md:h-[70px] flex items-center border-b border-[#2a2a2a]">
      <p title={taskId} className="mx-2 text-sm md:text-lg ">
        Task {taskId}
      </p>
      <button onClick={deleteHandler} className="ml-auto mr-1 md:mr-4">
        Delete
      </button>
    </div>
  );
}

export default TaskDetailsHeader;
