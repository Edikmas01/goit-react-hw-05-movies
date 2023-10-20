import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';

import { Movie } from 'components/Movie/Movie';
import './index.css';
import { Layout } from 'components/Layout';
import { Index } from 'routes';

import { MoviesPage } from 'pages/MoviesPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/movie',
        element: <MoviesPage />,
      },
      {
        path: '/movie/:movieId',
        element: <Movie />,
      },
    ],
  },
  ,
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
