import './containerProductInCart.css'
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext';

function ContainerProductInCart() {
    const { cart, clearCart, quitarProducto, sumaTotalCarrito, subTotal } = useContext(CartContext)
    
    return (
        <div className="contenedor__Productos">
            {cart.map((product) => (
                <div className="cajaProducto" key={product.id}>
                    <img className='cajaProducto__imagen' src={product.picture} alt='Imagen Producto' />
                    <div className='cajaProducto__subcaja'>
                        <h3 className="cajaProducto__titulo">{product.title}</h3>
                        <p className='cajaProducto__descripcion'>{product.description}</p>
                        <button className="cajaProducto__eliminar" onClick={() => quitarProducto(product.id)}>Eliminar</button>
                    </div>
                    <div className='cajaProducto__subcaja-dos'>
                        <span className="cajaProducto__cantidad">Cantidad: {product.cantidad}</span>
                        <p className="cajaProducto__subtotal">${subTotal(product)}</p>
                    </div>
                </div>
            ))
            }
            <div className='contenedor__precio'>
                <button className="contenedor__btn btnVaciar" onClick={clearCart}>Vaciar carrito</button>
                <p className="contenedor__precioTotal">Total ${sumaTotalCarrito()}</p>
            </div>
        </div>
    )
}

export default ContainerProductInCart