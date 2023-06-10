import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Footer, SpecialMenu, SpecialMenuDrinks } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <SpecialMenu />
    <SpecialMenuDrinks />
    <Footer />
  </div>
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export { App, MyApp, Analytics };
