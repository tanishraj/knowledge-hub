import React from 'react';
import { Outlet } from 'react-router-dom';

import { DefaultTemplate } from './template/default-template';
import './App.scss';

export function App() {
  return (
    <>
      <DefaultTemplate>
        <Outlet />
      </DefaultTemplate>
    </>
  );
}
