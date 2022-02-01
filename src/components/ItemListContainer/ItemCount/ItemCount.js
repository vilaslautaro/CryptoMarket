import { useState } from 'react';
import './itemCount.css';

function ItemCount({ inicial, stock }) {

    const [cantidadProducto, setCantidadProducto] = useState(inicial);
    const [messageAddItem, setMessageAddItem] = useState('');

    function onAdd() {
        if (cantidadProducto >= 0 && cantidadProducto < stock) {
            setCantidadProducto(cantidadProducto + 1);
        }
    }

    function onDecrease() {
        if (cantidadProducto > 0) {
            setCantidadProducto(cantidadProducto - 1);
        }
    }

    // funcion que al hacer click en elboton agregar carrito nos muestra un mensaje segun cada caso
    function addCart() {
        if (stock > 0) {
            if (cantidadProducto > 1) {
                return setMessageAddItem(`Se agregaron al carrito ${cantidadProducto} unidades del producto.`);
            } else if (cantidadProducto === 1) {
                return setMessageAddItem(`Se agregó al carrito ${cantidadProducto} unidad del producto.`);
            } else if (cantidadProducto === 0) {
                return setMessageAddItem('La cantidad minima de unidades para agregar al carrito es 1.');
            }
        } else {
            return setMessageAddItem('Lo sentimos, no hay stock disponible de este producto.');
        }
    }


    return (
        <div className="contenedor__Contador">
            <div className="producto__BoxCantidad">
                <button className="btn__Operacion" onClick={onDecrease}>-</button>
                <p className='texto__Operacion'>{cantidadProducto}</p>
                <button className="btn__Operacion" onClick={onAdd}>+</button>
            </div>
            <button className='btn__AgregarAlCarrito' onClick={addCart}> Agregar al carrito {messageAddItem && <span className='mensaje__Estado'>{messageAddItem}</span>}</button>
            
        </div>
    );
}

export default ItemCount;