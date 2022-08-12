import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

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
        <p className="p__opensans">+506 4033-5054</p>
        <p className="p__opensans">+506 6386-6138</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.beerShotsLogo} alt="footer_logo" />
        <p className="p__opensans">&quot;Pinares. Plaza La Carpintera - Carretera Vieja A Cartago. 350 Mts Este De La Estaci&oacute;n De Servicio La Galera., Curridabat 11801 Costa Rica&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario</h1>
        <p className="p__opensans">Lunes-Viernes:</p>
        <p className="p__opensans">11:00 am - 12:00 pm</p>
        <p className="p__opensans">S&aacute;bado-Domingo:</p>
        <p className="p__opensans">10:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Beer&#39;s Shots. Todos los derechos reservados.</p>
    </div>

  </div>
);

export default Footer;
