import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { AppRouter } from './src/router/app-router';
import './index.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={AppRouter} />);
