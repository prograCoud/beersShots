import React from 'react';

// import { SubHeading, MenuItem } from '../../components';
import { MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      {/* <SubHeading title="Menu that fits your palatte" /> */}{/*
      <h1 className="headtext__cormorant">Promociones</h1> */}
    </div> {/*
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" />
    </div> */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Lunes a Jueves</p>
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Promoción de alitas</p>
          <div className="app__specialMenu_menu_items">
            {data.promocionesBocas.map((promocionesBocas, index) => (
              <MenuItem key={promocionesBocas.title + index} title={promocionesBocas.title} price={promocionesBocas.price} tags={promocionesBocas.tags} />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Surtidos</p>
          <div className="app__specialMenu_menu_items">
            {data.surtidos.map((surtidos, index) => (
              <MenuItem key={surtidos.title + index} title={surtidos.title} price={surtidos.price} tags={surtidos.tags} />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Platos fuertes</p>
          <div className="app__specialMenu_menu_items">
            {data.platosFuertes.map((platosFuertes, index) => (
              <MenuItem key={platosFuertes.title + index} title={platosFuertes.title} price={platosFuertes.price} tags={platosFuertes.tags} />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Hamburguesas</p>
          <div className="app__specialMenu_menu_items">
            {data.hamburguesas.map((hamburguesas, index) => (
              <MenuItem key={hamburguesas.title + index} title={hamburguesas.title} price={hamburguesas.price} tags={hamburguesas.tags} />
            ))}
          </div>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="findus_img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Bocas</p>
        <div className="app__specialMenu_menu_items">
          {data.bocas.map((bocas, index) => (
            <MenuItem key={bocas.title + index} title={bocas.title} price={bocas.price} tags={bocas.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading" style={{ marginTop: 55 }}>Salsas o Extras</p>
        <div className="app__specialMenu_menu_items">
          {data.salsas.map((salsas, index) => (
            <MenuItem key={salsas.title + index} title={salsas.title} price={salsas.price} tags={salsas.tags} />
          ))}
        </div>
      </div>

    </div>

    {/* <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
          </div> */}
  </div>
);

export default SpecialMenu;
