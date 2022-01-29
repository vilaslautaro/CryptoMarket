import React, {useState} from 'react';
import './itemCount.css';

function ItemCount({ imgSrc, inicial, stock, nombreProducto, precioProducto, onAdd, message }) {

    const [cantidadProducto, setCantidadProducto] = useState(inicial);

    function sumarCantidadProducto() {
        if (cantidadProducto >= 0 && cantidadProducto < stock) {
        setCantidadProducto(cantidadProducto + 1);
        }
    }

    function restarCantidadProducto() {
        if (cantidadProducto > 0) {
            setCantidadProducto(cantidadProducto - 1);
        }
    }


    return (
        <div className="contenedor__Producto">
            <div className="box__imagen">
                <img className="img__Producto" src={imgSrc} alt="imagen producto" />
            </div>
            <div className="box__Producto">
                <p className="name__Producto">{nombreProducto}</p>
                <div className="box__Precio">
                    <img className="img__Dai" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" alt="imagen logo dai" />
                    <p className="precio__Producto">{precioProducto}</p>
                </div>
                <div className="producto__BoxCantidad">
                    <button className="btn__Operacion" onClick={restarCantidadProducto}>-</button>
                    <p className='texto__Operacion'>{cantidadProducto}</p>
                    <button className="btn__Operacion" onClick={sumarCantidadProducto}>+</button>
                </div>
                <button className='btn__AgregarAlCarrito' onClick={() => onAdd(stock, cantidadProducto, nombreProducto)}> Agregar al carrito</button>
                {message && <p className='mensaje__Estado'>{message}</p>}
                
            </div>
        </div >
    );
}

export default ItemCount;