import React from 'react';
import { Link } from 'react-router-dom';
import cartImg from '../img/empty-cart.png';

function Cart() {
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h1>
          Корзина пустая<span> &#128532;</span>
        </h1>
        <p>Вероятнее всего, вы не заказывали еще пиццу.</p>
        <p>Для того чтоб заказать пиццу, перейдите на главную страницу</p>
        <img src={cartImg} alt={"cart"}/>
        <Link to="/">
          <div className="button-return">Вернутся назад</div>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
