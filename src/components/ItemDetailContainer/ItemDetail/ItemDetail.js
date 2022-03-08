import './itemDetail.css';
import ItemCount from './ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext';
import { MessageContext } from '../../../context/MessageContext';

function ItemDetail({ producto }) {
    const [cantidadDeProductosEnviadosAlCarrito, setCantidadDeProductosEnviadosAlCarrito] = useState();

    const { añadirProductoAlCarrito } = useContext(CartContext)

    const { enviarMensaje } = useContext(MessageContext)

    function añadirAlCarrito(cantidad) {
        setCantidadDeProductosEnviadosAlCarrito(cantidad)
        añadirProductoAlCarrito(cantidad, producto)
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
                    !cantidadDeProductosEnviadosAlCarrito ?
                        <ItemCount stock={producto.stock} initial={1} addCart={añadirAlCarrito} /> :
                        <Link className="linkCart__Product" to="/cart">Ir al carrito</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;