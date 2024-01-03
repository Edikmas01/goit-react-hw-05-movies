import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { Layout } from 'components/Layout';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import './index.css';
import { Index } from 'routes';
import { Movies } from 'components/Movies';
import { Home } from 'components/Home';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movie',
        children: [
          {
            index: true, 
            element: <Movies />
          },
          {
            path: ':movieId',
            children: [
              {
                index: true,
                element: <MovieDetails />
              },
              {
                path: ':info',
                element: <MovieDetails />
              },
            ],
          },
        ],
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
