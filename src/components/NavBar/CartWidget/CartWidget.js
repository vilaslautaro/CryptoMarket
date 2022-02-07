import React from 'react';
import './cartWidget.css';

// funcion que crea el CARRITO
function CartWidget() {
    return (
        <div className="cajaCarrito">
                <i className="imgCarrito fas fa-shopping-cart"></i>
                <span className='contadorCarrito'>0</span>
        </div>
    );
}

export default CartWidget;