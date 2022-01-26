import React from 'react';
import './cartWidget.css';
// import carrito from '../../../assets/images/carrito.png';

function CartWidget() {
    return (
        <div className="cajaCarrito">
                <i className="imgCarrito fas fa-shopping-cart"></i>
                <span className='contadorCarrito'>0</span>
        </div>
    );
}

export default CartWidget;