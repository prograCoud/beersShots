import React from 'react';
import Analytics from '@vercel/analytics/dist/client';
import Footer from './container/Footer';
import SpecialMenu from './container/SpecialMenu';
import SpecialMenuDrinks from './container/MenuDrinks/SpecialMenuDrinks';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <SpecialMenu />
    <SpecialMenuDrinks />
    <Footer />
  </>
);

const MyApp = (props) => {
  return (
      <><props.Component {...props.pageProps} /><Analytics /></>
  );
};

export default App;
export { MyApp };
