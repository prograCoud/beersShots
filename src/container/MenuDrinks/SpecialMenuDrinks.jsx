import React from 'react';

// import { SubHeading, MenuItem } from '../../components';
import { MenuItem } from '../../components';
import { dataDrinks, images } from '../../constants';
import './SpecialMenuDrinks.css';

const SpecialMenuDrinks = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      {/* <SubHeading title="Menu that fits your palatte" /> */}
      <h1 className="headtext__cormorant">bebidas</h1>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Lunes a Jueves</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.promocionesTragos.map((promocionesTragos, index) => (
            <MenuItem key={promocionesTragos.title + index} title={promocionesTragos.title} price={promocionesTragos.price} tags={promocionesTragos.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Promos</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.promoCervezas.map((promoCervezas, index) => (
            <MenuItem key={promoCervezas.title + index} title={promoCervezas.title} price={promoCervezas.price} tags={promoCervezas.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cervezas</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.cervezas.map((cervezas, index) => (
            <MenuItem key={cervezas.title + index} title={cervezas.title} price={cervezas.price} tags={cervezas.tags} />
          ))}
        </div>
      </div>
      {/*
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="findus_img" />
      </div> */}

      {/* <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Bocas</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.bocas.map((bocas, index) => (
            <MenuItem key={bocas.title + index} title={bocas.title} price={bocas.price} tags={bocas.tags} />
          ))}
        </div>
          </div> */}

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Tragos</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.tragos.map((tragos, index) => (
            <MenuItem key={tragos.title + index} title={tragos.title} price={tragos.price} tags={tragos.tags} />
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
