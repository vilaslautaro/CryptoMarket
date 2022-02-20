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
                    <>
                        <h1>Tu carrito esta vacio</h1>
                        <Link to="/">
                            <button onClick={clear} className="contenedor__carrito-vacio">Volver a inicio</button>
                        </Link>
                    </>
                    :
                    (
                        <>
                            {cart.map((product) => (
                                <div key={product.id}>
                                    <h3>{product.title}</h3>
                                    <span>{product.cantidad}</span>
                                    <p>{product.price}</p>
                                    <i onClick={() => quitarProducto(product.id)} className="fas fa-backspace"></i>
                                    <p>Subtotal ${subTotal(product)}</p>
                                </div>
                            ))
                            }
                            <p >Precio total ${sumaTotal()}</p>
                            <button onClick={clear}>Vaciar carrito</button>
                        </>
                    )
            }
        </>
    )
}

export default Cart