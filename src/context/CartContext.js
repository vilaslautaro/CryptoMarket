import { addDoc, collection } from "firebase/firestore"
import { db } from '../firebase'
import { createContext, useState, useEffect } from "react"
import { useLocation } from 'react-router-dom'

export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [idCompra, setIdCompra] = useState('')
    const [cart, setCart] = useState([])
    const [cambioCantidad, setCambioCantidad] = useState(true)
    const [compraRechazada, setCompraRechazada] = useState(false)
    const [counterCart, setCounterCart] = useState(0)
    const URL = useLocation();
    let contador;

    useEffect(() => {
        CartLocalStorage()
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        let sumandoCantidad = 0
        cart.forEach((prod) => {
            sumandoCantidad += prod.cantidad
        })
        setCounterCart(sumandoCantidad)
    }, [cart, cambioCantidad])

    useEffect(()=> {
        if (idCompra !== "" && URL.pathname !== '/cart') {
                setIdCompra('')
        }
    },[idCompra, URL.pathname])


    function CartLocalStorage() {
        if ('cart' in localStorage) {
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
        cambioCantidad ? setCambioCantidad(false) : setCambioCantidad(true)
        
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

    function sumaTotalCarrito() {
        contador = 0
        cart.forEach((prod) => {
            contador += ( prod.price * prod.cantidad )
        })
        return contador
    }

    const enviarCompraFirebase = (user) => {

        let fecha = `${String(new Date().getDate())}/${String(new Date().getMonth() + 1)}/${new Date().getFullYear()}`

        const filtroProductoYCantidad = cart.map(producto => (`Producto: "${producto.title}" - Cantidad: ${producto.cantidad}`))

        const {nombre, telefono, email} = user

        const datosUsuario = `Nombre: ${nombre} - Telefono: ${telefono} - Email: ${email}`

        const fechaYContador = `La compra fue realizada el: ${fecha} y el precio final es de: $${contador}`

        const datosCompra = [...filtroProductoYCantidad, fechaYContador, datosUsuario]

        const arrayDatosCompra = { ...datosCompra }

        addDoc(collection(db, 'compras'), arrayDatosCompra)
            .then((resolve) => {
                setIdCompra(resolve.id)
                clearCart()
                setCompraRechazada(false)
            })
            .catch(() => {
                setCompraRechazada(true)
            })
    }

    return (
        <CartContext.Provider value={{ cart, añadirProductoAlCarrito, clearCart, quitarProducto, sumaTotalCarrito, subTotal, enviarCompraFirebase, idCompra, setIdCompra, compraRechazada, setCompraRechazada, counterCart }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider