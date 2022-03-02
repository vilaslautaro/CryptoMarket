import './itemDetail.css';
import ItemCount from './ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext';
import { MessageContext } from '../../../context/MessageContext';

// funcion que crea la caja visual del item individiualmente cuando es seleccionado
function ItemDetail({ producto }) {
    // estado que guarda la cantidad de x producto que desea enviar el usuario al carrito
    const [quantityProductSendToCart, setQuantityProductSendToCart] = useState();

    const { añadirProductoAlCarrito } = useContext(CartContext)

    const { enviarMensaje } = useContext(MessageContext)

    // funcion que trae el valor que el usuario desea enviar al carrito y lo guarda en el estado
    function addCart(cantidad) {
        // guardo
        setQuantityProductSendToCart(cantidad)
        añadirProductoAlCarrito(cantidad, producto)
        // creo mensaje que avisa al usuario que el producto fue cargado de manera exitosa
        enviarMensaje('Tu producto fue cargado al carrito de manera exitosa', 'mostrar', 2000)
    }


    return (
        <div className='container__Box'>
            <img className="img__Product" src={producto.picture} alt='imagen producto' />
            <div className="box__Product">
                <div className="box__Description">
                    <p className="name__Product">{producto.title}</p>
                    <p className="descripcion__Product">{producto.description}</p>
                    <div className="box__Price">
                        <img className="img__Cripto" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" title="Dai Criptomoneda" alt="imagen logo dai" />
                        <p className="precio__Product">{producto.price}</p>
                    </div>
                </div>
                {
                    // si el estado quantity es undefined (por default lo es) traemos el ItemCount, si esta definido, traemos un link que nos lleva al carrito
                    !quantityProductSendToCart ?
                        <ItemCount stock={producto.stock} initial={1} addCart={addCart} /> :
                        <Link className="linkCart__Product" to="/cart">Finalizar compra</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;