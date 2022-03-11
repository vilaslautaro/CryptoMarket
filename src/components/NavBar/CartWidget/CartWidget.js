import React from 'react';
import './cartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    const { counterCart } = useContext(CartContext)



    return (
        <Link className="enlace__Carrito" to={'/cart'} >
            <FontAwesomeIcon className="imgCarrito" icon={faCartShopping} />
            <span className={counterCart === 0 ? 'contadorVacio' : 'contadorCarrito'}>{counterCart}</span>
        </Link>
    );
}

export default CartWidget;