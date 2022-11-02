import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags, price2, price3, price4 }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant"> {price2 ? 'Shots' : ''} {price}</p>
      </div>
    </div>
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}></p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price2 ? 'Cuarta' : ''} {price2}</p>
      </div>
    </div>
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}></p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price3 ? 'Botella' : ''} {price3}</p>
      </div>
    </div>
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}></p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price4 ? 'Litro' : ''} {price4}</p>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
