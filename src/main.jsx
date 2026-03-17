import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store.js';
import Tasks from './components/task/TasksContainer.jsx';
import TasksLayout from './layout/TasksLayout.jsx';
import RootLayout from './layout/RootLayout.jsx';
import Home from './components/Home.jsx';
import AuthForm from './components/auth/AuthForm.jsx';
import Authenticator from './components/Authenticator.jsx';
import { login } from './services/auth-service.js';
import TasksContainer from './components/task/TasksContainer.jsx';
import TaskDetails from './components/task/TaskDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: (
          <AuthForm
            formLabel="Login"
            func={login}
            redirectTo="/signup"
            redirectLabel="Create new Account?"
          />
        ),
      },
      {
        path: 'signup',
        element: (
          <AuthForm
            formLabel="Sign up"
            redirectTo="/login"
            redirectLabel="Already have an Account?"
          />
        ),
      },
    ],
  },
  {
    path: '/tasks',
    element: (
      <Authenticator>
        <TasksLayout />
      </Authenticator>
    ),
    children: [
      {
        path: '',
        element: <TasksContainer />,
      },
      {
        path: ':taskId',
        element : <TaskDetails/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
