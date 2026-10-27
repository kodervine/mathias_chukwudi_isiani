import { Navigate, useRoutes } from 'react-router-dom';
import AppLayout from '@/layouts/AppLayout';
import Home from '@/pages/Home';
import Publications from '@/pages/Publications';

const AppRoutes = () =>
  useRoutes([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/publications', element: <Publications /> },
      ],
    },
    { path: '/*', element: <Navigate to="/" /> },
  ]);

export default AppRoutes;
