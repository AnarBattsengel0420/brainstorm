import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
]);