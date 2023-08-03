import React from 'react';
import Analytics from '@vercel/analytics';
import Footer from './container/Footer/Footer';
import SpecialMenu from './container/Menu/SpecialMenu';
import SpecialMenuDrinks from './container/MenuDrinks/SpecialMenuDrinks';
import Navbar from './components/Navbar/Navbar';
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
