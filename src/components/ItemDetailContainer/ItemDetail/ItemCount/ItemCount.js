import { useContext, useState } from 'react'
import { MessageContext } from '../../../../context/MessageContext';
import './itemCount.css';

function ItemCount({ initial, stock, addCart }) {
    const { enviarMensaje } = useContext(MessageContext)
    const [cantidadProducto, setCantidadProducto] = useState(initial);

    function sumarCantidad() {
        if (cantidadProducto >= 1 && cantidadProducto < stock) {
            setCantidadProducto(cantidadProducto + 1);
        } else {
            enviarMensaje('El stock maximo del producto ha sido alcanzado', 'mostrar', 2000)
        }
    }

    function restarCantidad() {
        if (cantidadProducto > 1) {
            setCantidadProducto(cantidadProducto - 1);
        } else {
            enviarMensaje('La cantidad minima que podes comprar es 1', 'mostrar', 2000)
        }
    }

    function enviarProductoAlCarrito() {
            addCart(cantidadProducto)
    }

    return (
        <div className="contenedor__Contador">
            <div className="producto__BoxCantidad">
                <button className="btn__Operacion" onClick={restarCantidad}>-</button>
                <p className='texto__Operacion'>{cantidadProducto}</p>
                <button className="btn__Operacion" onClick={sumarCantidad}>+</button>
            </div>
            <button className='btn__AgregarAlCarrito' onClick={enviarProductoAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;