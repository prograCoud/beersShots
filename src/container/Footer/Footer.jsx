import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
/* import { FooterOverlay, Newsletter } from '../../components'; */
import { FooterOverlay } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contáctenos</h1>
        <p className="p__opensans"> </p>
        <p className="p__opensans"><a href="tel:+50640335054">+506 4033-5054</a></p>
        <p className="p__opensans"><a href="+50663866138">+506 6386-6138</a></p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.beerShotsLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;Pinares. Plaza La Carpintera - Carretera Vieja A Cartago. 350 Mts Este De La Estaci&oacute;n De Servicio La Galera., Curridabat 11801 Costa Rica&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a aria-label="facebook icon" target="_blank" rel="noreferrer" href="https://www.facebook.com/BeerShotsBar"><FiFacebook /></a>
          <a aria-label="instagram icon" target="_blank" rel="noreferrer" href="https://instagram.com/beer_shots_pinares"><FiInstagram /></a>

        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario</h1>
        <p className="p__opensans">Todos los días:</p>
        <p className="p__opensans">12:00 md - 1:30 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Beer&#39;s Shots. Todos los derechos reservados.</p>
    </div>

  </div>
);

export default Footer;
