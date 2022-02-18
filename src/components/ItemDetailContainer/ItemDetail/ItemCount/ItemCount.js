import { useState } from 'react';
import './itemCount.css';

function ItemCount({ initial, stock, addCart }) {
// estado que guarda la cantidad de producto inicial y la que va modificando el usuario
    const [cantidadProducto, setCantidadProducto] = useState(initial);

    // funcion que suma en cantidadProducto
    function onAdd() {
        if (cantidadProducto >= 0 && cantidadProducto < stock) {
            setCantidadProducto(cantidadProducto + 1);
        }
    }

    // funcion que resta en cantidadProducto
    function onDecrease() {
        if (cantidadProducto > 0) {
            setCantidadProducto(cantidadProducto - 1);
        }
    }

    function addToCart(){
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