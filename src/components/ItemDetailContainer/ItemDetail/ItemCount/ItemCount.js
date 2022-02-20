import { useState } from 'react';
import './itemCount.css';

function ItemCount({ initial, stock, addCart }) {
    // estado que guarda la cantidad de producto inicial y la que va modificando el usuario
    const [cantidadProducto, setCantidadProducto] = useState(initial);

    // funcion que suma en cantidadProducto
    function onAdd() {
        if (cantidadProducto >= 1 && cantidadProducto < stock) {
            setCantidadProducto(cantidadProducto + 1);
        } else {
            console.log('El stock maximo del producto ha sido alcanzado')
        }
    }

    // funcion que resta en cantidadProducto
    function onDecrease() {
        if (cantidadProducto > 1) {
            setCantidadProducto(cantidadProducto - 1);
        } else {
            console.log('La cantidad minima que podes comprar es 1')
        }
    }

    function addToCart() {
            addCart(cantidadProducto)
    }

    return (
        <div className="contenedor__Contador">
            <div className="producto__BoxCantidad">
                <button className="btn__Operacion" onClick={onDecrease}>-</button>
                <p className='texto__Operacion'>{cantidadProducto}</p>
                <button className="btn__Operacion" onClick={onAdd}>+</button>
            </div>
            <button className='btn__AgregarAlCarrito' onClick={addToCart}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;