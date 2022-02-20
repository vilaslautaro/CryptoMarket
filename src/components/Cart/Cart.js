import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'


function Cart() {
    const { cart, clear, quitarProducto, sumaTotal, subTotal } = useContext(CartContext)

    return (
        <>
            {
                cart.length === 0 ?
                    <div className='contenedorVacio'>
                        <h1 className='contenedorVacio__titulo'>Tu carrito esta vacio</h1>
                        <Link to="/">
                            <button onClick={clear} className="contenedorVacio__carrito-vacio">Volver a inicio</button>
                        </Link>
                    </div>
                    :
                    (
                        <div className="contenedor">
                            <div className="contenedor__Productos">
                                {cart.map((product) => (
                                    <div className="cajaProducto" key={product.id}>
                                        <img className='cajaProducto__imagen' src={product.picture} alt='Imagen Producto' />
                                        <div className='cajaProducto__subcaja'>
                                            <h3 className="cajaProducto__titulo">{product.title}</h3>
                                            <p className='cajaProducto__descripcion'>{product.description}</p>
                                            <button className="cajaProducto__eliminar" onClick={() => quitarProducto(product.id)}>Eliminar</button>
                                        </div>
                                        <div className='cajaProducto__subcaja'>
                                            <span className="cajaProducto__cantidad">Cantidad: {product.cantidad}</span>
                                            <p className="cajaProducto__subtotal">${subTotal(product)}</p>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                            <div className="contenedor__subcaja">
                                <p className="contenedor__precioTotal">Total ${sumaTotal()}</p>
                                <div className='contenedor__botones'>
                                    <div>
                                        <button className="contenedor__btn btnVaciar" onClick={clear}>Vaciar carrito</button>
                                    </div>
                                    <Link to="/">
                                        <button className='contenedor__btn btnComprar'>Finalizar compra</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Cart