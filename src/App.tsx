import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/mainLayout';
import Users from './pages/user/user';
import Login from './pages/login/login';
import './styles/main.scss';
import { AppProvider } from './context/appProvider';
import UserDetailsPage from './pages/user-details/userDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      { path: 'users', element: <Users /> },
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
