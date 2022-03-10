import React from 'react';
import './cartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';

function CartWidget() {
    const { counterCart } = useContext(CartContext)



    return (
        <Link className="enlace__Carrito" to={'/cart'} >
                <i className="imgCarrito fas fa-shopping-cart"></i>
                <span className={counterCart === 0 ? 'contadorVacio' : 'contadorCarrito'}>{counterCart}</span>
        </Link>
    );
}

export default CartWidget;