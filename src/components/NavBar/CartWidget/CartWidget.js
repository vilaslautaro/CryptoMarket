import React from 'react';
import './cartWidget.css';
import carrito from '../../../assets/images/carrito.png';

function CartWidget(){
    return (
        <img className="imgCarrito" alt="carrito" src={carrito} ></img>
    );
}

export default CartWidget;