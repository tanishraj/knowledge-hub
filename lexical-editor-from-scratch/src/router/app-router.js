import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import { DummyComponent } from '../components/dummy-component';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <DummyComponent />,
      },
    ],
  },
]);
