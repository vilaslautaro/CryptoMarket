import { addDoc, collection } from "firebase/firestore"
import { db } from '../firebase'
import { createContext, useState, useContext, useEffect } from "react"
import { MessageContext } from './MessageContext'
import { useLocation } from 'react-router-dom'

export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [idCompra, setIdCompra] = useState('')
    const [cart, setCart] = useState([])
    const { enviarMensaje } = useContext(MessageContext)
    
    useEffect(() =>{
        CartLocalStorage()
    }, [])

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])



    const URL = useLocation();
    if (idCompra !== "") {
        if (URL.pathname !== '/cart') {
            setIdCompra('')
        }
    }


    function CartLocalStorage(){
        if('cart' in localStorage){
            let cartSaved = JSON.parse(localStorage.getItem('cart'))
            setCart([...cartSaved])
        }
    }


    function añadirProductoAlCarrito(cantidad, producto) {
        if (buscarProductoEnCarrito(producto.id) === false) {
            setCart([...cart, { ...producto, cantidad }])
        } else {
            sumarCantidad(cantidad, producto)
        }
    }

    const buscarProductoEnCarrito = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    function clearCart() {
        setCart([])
        localStorage.clear();
    }
    
    function quitarProducto(id) {
        setCart(cart.filter((producto) => producto.id !== id))
    }

    function sumarCantidad(cantidad, producto) {
        cart.forEach((p) => {
            if (p.id === producto.id) {
                p.cantidad += cantidad
            }
        })
    }

    function subTotal(producto) {
        return producto.price * producto.cantidad
    }

    let contador;
    function sumaTotalCarrito() {
        contador = 0
        cart.forEach((prod) => {
            contador = contador + prod.price * prod.cantidad
        })
        return contador
    }

    const enviarCompraFirebase = (user) => {

        let fecha = new Date();
        let salidaFecha = String(fecha.getDate()).padStart(2, '0') + '/' + String(fecha.getMonth() + 1).padStart(2, '0') + '/' + fecha.getFullYear();

        const filtroProductoYCantidad = cart.map(producto => (`Producto: "${producto.title}" - Cantidad: ${producto.cantidad}`))

        const datosUsuario = `Nombre: ${user.nombre} - Telefono: ${user.telefono} - Email: ${user.email}`

        const FechaYContador = `La compra fue realizada el: ${salidaFecha} y el precio final es de: $${contador}`

        const DatosCompra = [...filtroProductoYCantidad, FechaYContador, datosUsuario]

        const ArrayDatosCompra = {...DatosCompra}

        addDoc(collection(db, 'compras'), ArrayDatosCompra)
            .then((resolve) => {
                console.log(ArrayDatosCompra)
                setIdCompra(resolve._key.path.segments[1])
                clearCart()
            })
            .catch((error) => {
                console.log(error)
                enviarMensaje('Lo sentimos ha habido un error al momento de procesar tu compra', 'mostrar-grande', 5000)
            })
    }

    return (
        <CartContext.Provider value={{ cart, añadirProductoAlCarrito, clearCart, quitarProducto, sumaTotalCarrito, subTotal, enviarCompraFirebase, idCompra, setIdCompra }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider