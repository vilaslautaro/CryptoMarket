import React from 'react';
import './cartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';

// funcion que crea el CARRITO
function CartWidget() {
    const { cart } = useContext(CartContext)
    return (
        <Link className="enlace__Carrito" to={'/cart'} >
                <i className="imgCarrito fas fa-shopping-cart"></i>
                <span className='contadorCarrito'>{cart.length}</span>
        </Link>
    );
}

export default CartWidget;