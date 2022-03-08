import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import FormInCart from './FormInCart/FormInCart';
import ContainerProductInCart from './ContainerProductInCart/ContainerProductInCart'
import Lottie from "lottie-react";
import {configEmptyCart} from "./../../lotties/lotties";

function Cart() {
    const { cart, idCompra } = useContext(CartContext)

    function messageID(id) {
        return (
            <>
                <p className='text__success'>Tu compra ha sido exitosa. Gracias por confiar en nosotros!</p>
                <p className='text__success'>El ID de tu compra es: <span className='text__id'>{id}</span></p>
            </>
        )
    }

    return (
        <>
            {
                cart.length === 0 ?
                    <div className='contenedorVacio'>
                        <h1 className='contenedorVacio__titulo'>{idCompra === '' ? <Lottie {...configEmptyCart} /> : messageID(idCompra)}</h1>
                        <Link to="/">
                            <button className="contenedorVacio__carrito-vacio">Volver a inicio</button>
                        </Link>
                    </div>
                    :
                    (
                        <div className="contenedor">
                            <FormInCart />
                            <ContainerProductInCart />
                        </div>
                    )
            }
        </>
    )
}

export default Cart