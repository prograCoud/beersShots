import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Footer, SpecialMenu, SpecialMenuDrinks } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    {/* <Header /> */}
    {/* <AboutUs /> */}
    <SpecialMenu />
    <SpecialMenuDrinks />
    {/* <Chef /> */}
    {/* <Intro /> */}
    {/* <Laurels /> */}
    {/* <Gallery /> */}
    {/* <FindUs /> */}
    <Footer />
  </div>
);

export default { App, MyApp, Analytics};
