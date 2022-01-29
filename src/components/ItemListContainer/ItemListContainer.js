import React, { useState } from 'react';
import ItemCount from './ItemCount';
import './itemListContainer.css';

function ItemListContainer() {

    const [messageAddItem, setMessageAddItem] = useState('');

    function agregarItemAlCarrito(stock, cantidadProducto, nombreProducto) {
        if (stock > 0) {
            if (cantidadProducto >= 1) {
                return setMessageAddItem(`Se agregaron al carrito ${cantidadProducto} Unidades del ${nombreProducto}.`);
            } else if (cantidadProducto === 1) {
                return setMessageAddItem(`Se agregó al carrito${cantidadProducto} Unidad del ${nombreProducto}.`);
            } else if (cantidadProducto === 0) {
                return setMessageAddItem('La cantidad minima de unidades para agregar al carrito es 1.');
            }
        } else {
            return setMessageAddItem('Lo sentimos, no hay stock disponible de este producto.');
        }
    }


    return (
        <div>
            <div className="box__Items">
                <ItemCount imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oOeAHj-VRdD_olCk-hxwP10Wvp7uh8ZBfl5V9P6muhWh2vW7Up9ffDnnZQcLy63fVQE&usqp=CAU" inicial={1} stock={6} nombreProducto="SAMSUNG S21 128GB" precioProducto={1000} onAdd={agregarItemAlCarrito} message={messageAddItem} />
            </div>
        </div>
    );
}

export default ItemListContainer;

