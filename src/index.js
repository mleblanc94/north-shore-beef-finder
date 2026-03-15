import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Leaderboards from './pages/Leaderboards';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/leaderboards',
        element: <Leaderboards />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
