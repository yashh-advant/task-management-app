import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';

function AuthForm({ formLabel, func, redirectTo, redirectLabel }) {
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onChangeHandler = (identifier, val) => {
    setUserDetails(prev => ({
      ...prev,
      [identifier]: val.trim(),
    }));
    setError('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!userDetails.username.trim() || !userDetails.password.trim()) {
      setError('All Details are Mandatory');
      return;
    }
    func(userDetails);
    navigate('/tasks');
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-60px)] px-4 text-white">
      <form onSubmit={handleSubmit} className="w-full max-w-sm border border-gray-800 p-6 rounded">
        <p className="text-lg text-center mb-5">{formLabel}</p>
        <div className="mb-4">
          <label className="block text-sm mb-1 text-gray-300">Username</label>
          <input
            type="text"
            placeholder="username"
            value={userDetails.username}
            onChange={e => onChangeHandler('username', e.target.value)}
            className="w-full px-3 py-2 bg-transparent border border-gray-700 rounded text-sm focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="mb-5">
          <label className="block text-sm mb-1 text-gray-300">Password</label>
          <input
            type="password"
            placeholder="******"
            value={userDetails.password}
            onChange={e => onChangeHandler('password', e.target.value)}
            className="w-full px-3 py-2 bg-transparent border border-gray-700 rounded text-sm focus:outline-none focus:border-gray-500"
          />
        </div>
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}{' '}
        <div className="flex justify-between items-center text-sm">
          <NavLink to={redirectTo} className="text-gray-400 hover:text-gray-200">
            {redirectLabel}
          </NavLink>

          <button
            type="submit"
            className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800"
          >
            {formLabel}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
