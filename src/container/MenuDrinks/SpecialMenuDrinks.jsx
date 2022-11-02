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

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Shots</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.tragos.map((tragos, index) => (
            <MenuItem key={tragos.title + index} title={tragos.title} price={tragos.price} price2={tragos.price2} price3={tragos.price3} price4={tragos.price4} tags={tragos.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cócteles</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Vinos</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.vinos.map((vinos, index) => (
            <MenuItem key={vinos.title + index} title={vinos.title} price={vinos.price} tags={vinos.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Bebidas sin alcohol</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.bebidas.map((bebidas, index) => (
            <MenuItem key={bebidas.title + index} title={bebidas.title} price={bebidas.price} tags={bebidas.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cigarros</p>
        <div className="app__specialMenu_menu_items">
          {dataDrinks.cigarros.map((cigarros, index) => (
            <MenuItem key={cigarros.title + index} title={cigarros.title} price={cigarros.price} tags={cigarros.tags} />
          ))}
        </div>
      </div>

    </div>
  </div>
);

export default SpecialMenuDrinks;
