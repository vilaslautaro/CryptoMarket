import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom'
import FormInCart from './FormInCart/FormInCart';
import ContainerProductInCart from './ContainerProductInCart/ContainerProductInCart'
import Lottie from "lottie-react";
import {configEmptyCart, configSuccess} from "./../../lotties/lotties";

function Cart() {
    const { cart, idCompra } = useContext(CartContext)

    function messageID(id) {
        return (
            <>  
                <Lottie className='cart__lottie success' {...configSuccess} />
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
                        {idCompra === '' ? <Lottie className='cart__lottie vacio' {...configEmptyCart} /> : messageID(idCompra)}
                        <Link to="/">
                            <button className="contenedorVacio__btn">Volver a inicio</button>
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