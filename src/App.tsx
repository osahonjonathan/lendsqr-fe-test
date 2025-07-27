import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import MainLayout from './layouts/mainLayout';

import { AppProvider } from './context/appProvider';

import { lazy, Suspense } from 'react';

import './styles/main.scss';

const LoginPage = lazy(() => import('./pages/login/login'));
const UserDetailsPage = lazy(
  () => import('./pages/user-details/userDetailsPage')
);
const UsersDashboardPage = lazy(() => import('./pages/user/user'));
const NotFoundPage = lazy(() => import('./pages/not-found/notFoundPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/app',
    element: <MainLayout />,
    children: [
      {
        path: 'users',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UsersDashboardPage pageTitle="Users" isInteractive={true} />
          </Suspense>
        ),
      },
      {
        path: 'users/:id',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UserDetailsPage />
          </Suspense>
        ),
      },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UsersDashboardPage pageTitle="Dashboard" isInteractive={false} />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFoundPage />
          </Suspense>
        ),
      },
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
