import Footer from './Footer/Footer';
import Header from './Header/Header';
import SpecialMenu from './Menu/SpecialMenu';
import SpecialMenuDrinks from './MenuDrinks/SpecialMenuDrinks';

export {
  Footer,
  Header,
  SpecialMenu,
  SpecialMenuDrinks,
};

const fs = require('fs');

try {
  // Checking if file exists using fs.accessSync
  fs.accessSync('./container/Footer.js', fs.constants.R_OK);
} catch (err) {
  console.error('./container/Footer.js file does not exist');
}

