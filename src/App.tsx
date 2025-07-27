import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/mainLayout';

import Login from './pages/login/login';
import './styles/main.scss';
import { AppProvider } from './context/appProvider';
import UserDetailsPage from './pages/user-details/userDetailsPage';

import UsersDashboardPage from './pages/user/user';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        path: 'users',
        element: (
          <UsersDashboardPage pageTitle="Users" isInteractive={true} />
        ),
      },
      {
        path: 'dashboard',
        element: (
          <UsersDashboardPage pageTitle="Dashboard" isInteractive={false} />
        ),
      },
      { path: 'users/:id', element: <UserDetailsPage /> },
    ],
  },
]);

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
