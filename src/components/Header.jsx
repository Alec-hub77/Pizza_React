import React from 'react';
import logo from '../img/pizza-logo.svg';
import cart from '../img/cart.svg';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo" />
          <div>
            <h1>react pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
            <a className="button button--cart" >
                <span>520</span>
                <div className="button__delimiter"></div>
                <img src={cart} alt=""/>
            <span className="">3</span>
            </a>
            
        </div>
      </div>
    </div>
  );
}

export default Header;
