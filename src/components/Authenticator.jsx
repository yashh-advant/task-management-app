import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { authActions } from '../store/auth-slice';

function Authenticator({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userDetails'));

    if (!data) {
      navigate('/login');
    } else {
      dispatch(authActions.login(data));
    }
  }, [navigate, dispatch]);

  return <>{children}</>;
}

export default Authenticator;
