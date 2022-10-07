import React from 'react';

// import { SubHeading, MenuItem } from '../../components';
import { MenuItem } from '../../components';
import { dataDrinks, images } from '../../constants';
import './SpecialMenuDrinks.css';

const SpecialMenuDrinks = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      {/* <SubHeading title="Menu that fits your palatte" /> */}
      <h1 className="headtext__cormorant">Promociones tragos</h1>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Lunes a Jueves</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cervezas</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="findus_img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Bocas</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.bocas.map((bocas, index) => (
            <MenuItem key={bocas.title + index} title={bocas.title} price={bocas.price} tags={bocas.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Promoción de alitas</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.promocionesBocas.map((promocionesBocas, index) => (
            <MenuItem key={promocionesBocas.title + index} title={promocionesBocas.title} price={promocionesBocas.price} tags={promocionesBocas.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
          </div> */}
  </div>
);

export default SpecialMenuDrinks;
