import React from 'react';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
