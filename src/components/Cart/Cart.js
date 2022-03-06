import './cart.css'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'


function Cart() {
    const { cart, clear, quitarProducto, sumaTotal, subTotal, enviarCompra, idCompra, setIdCompra } = useContext(CartContext)
    const [user, setUser] = useState({})

    // estados del formulario
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')


    // seteo de los estados del formulario cuando el usuario completa los datos
    const handleNombreChange = event => setNombre(event.target.value)
    const handleTelefonoChange = event => setTelefono(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)


    useEffect(() => {
        setUser({ nombre, telefono, email })
    }, [nombre, telefono, email])

    // funcion que envia los datos del producto y del formulario al cartContext
    function compraFinalizada(event) {
        event.preventDefault()
        if ((nombre && telefono && email) !== "") {
            enviarCompra(user)
        } else {
            console.log('formulario no completado')
        }
    }

    function messageID(id) {
        return (
            <>
                <p className='text__success'>Tu compra ha sido exitosa. Gracias por confiar en nosotros!</p>
                <p className='text__success'>El ID de tu compra es: {id}</p>
            </>
        )
    }

    // function que resetea el ID y el usuario
    function resetUserAndId() {
        setIdCompra('')
        setUser('')
    }

    return (
        <>
            {
                cart.length === 0 ?
                    <div className='contenedorVacio'>
                        <h1 className='contenedorVacio__titulo'>{idCompra === '' ? 'Tu carrito esta vacio' : messageID(idCompra)}</h1>
                        <Link to="/">
                            <button onClick={resetUserAndId} className="contenedorVacio__carrito-vacio">Volver a inicio</button>
                        </Link>
                    </div>
                    :
                    (
                        <div className="contenedor">
                            <form className='formUser'>
                                <div className='formUser__title'>Completa el formulario para continuar con la compra</div>
                                <div className='formUser__subBox'>
                                    <div className='formUser__cajaInput'>
                                        <p className='formUser__subtitle'>Nombre completo</p>
                                        <input name='nombre' value={nombre} placeholder='Juan Suarez' className='formUser__input' onChange={handleNombreChange} type='text' />
                                    </div>
                                    <div className='formUser__cajaInput'>
                                        <p className='formUser__subtitle'>Celular</p>
                                        <input name="telefono" value={telefono} placeholder='+54 11 500 798' className='formUser__input' onChange={handleTelefonoChange} type='tel' />
                                    </div>
                                    <div className='formUser__cajaInput'>
                                        <p className='formUser__subtitle'>Email</p>
                                        <input name='email' value={email} placeholder='usuario@gmail.com' className='formUser__input' onChange={handleEmailChange} type='email' />
                                    </div>
                                </div>
                                <div className='contenedor__botones'>
                                    <button className='contenedor__btn btnComprar' type='submit' onClick={compraFinalizada}>Finalizar compra</button>
                                </div>
                            </form>
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
                                <div className='contenedor__precio'>
                                    <button className="contenedor__btn btnVaciar" onClick={clear}>Vaciar carrito</button>
                                    <p className="contenedor__precioTotal">Total ${sumaTotal()}</p>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Cart