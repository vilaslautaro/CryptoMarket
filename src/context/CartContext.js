import { addDoc, collection } from "firebase/firestore";
import { db } from '../firebase'
import { createContext, useState, useContext } from "react";
import { MessageContext } from './MessageContext';


export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])
    const [usuario, setUsuario] = useState([])
    const [idCompra, setIdCompra] = useState('')
    const { enviarMensaje } = useContext(MessageContext)

    // añadimos productos al carrito si ya estan en el carrito, sino, solo añadimos cantidad
    function añadirProductoAlCarrito(cantidad, producto) {
        if (searchProductInCart(producto.id) === false) {
            setCart([...cart, { ...producto, cantidad }])
        } else {
            sumarCantidad(cantidad, producto)
        }
    }

    // cargamos los datos del formulario a usuario
    function cargarDatosUsuario(nombre, telefono, email) {
        setUsuario([nombre, telefono, email])
    }

    // buscamos si el producto esta en el carrito
    const searchProductInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    // reseteamos el carrito y los datos del usuario
    function clear() {
        setCart([])
    }

    // function que resetea el ID y el usuario
    function resetUserAndId() {
        setIdCompra('')
        setUsuario([])
    }

    // funcion para sacar producto del carrito
    function quitarProducto(id) {
        setCart(cart.filter((producto) => producto.id !== id))
    }

    // function para sumar cantidad si ya esta en el carrito
    function sumarCantidad(cantidad, producto) {
        cart.forEach((p) => {
            if (p.id === producto.id) {
                p.cantidad += cantidad
            }
        })
    }

    // calcular subtotal del producto (individualmente)
    function subTotal(producto) {
        return producto.price * producto.cantidad
    }

    // function que calcula el precio TOTAL del carrito
    let contador;
    function sumaTotal() {
        contador = 0
        cart.forEach((prod) => {
            contador = contador + prod.price * prod.cantidad
        })
        return contador
    }

    // funcion que ejecuta un mensaje cuando la compra fue finalizada mostrando el ID de la compra al usuario
    function messageID(id) {
        if (id !== "") {
            setIdCompra(id)
            return (
                <>
                    <p className='text__success'>Tu compra ha sido exitosa. Gracias por confiar en nosotros!</p>
                    <p className='text__success'>El ID de tu compra es: {id}</p>
                </>
            )
        } else {
            setIdCompra()
        }
    }


    // funcion que envia la compra a firebase con los datos
    const enviarCompra = () => {
            // fecha
            let fecha = new Date();
            let salidaFecha = String(fecha.getDate()).padStart(2, '0') + '/' + String(fecha.getMonth() + 1).padStart(2, '0') + '/' + fecha.getFullYear();

            // filtrar datos del carrito y transformarlos en un solo objeto para ser enviados
            const filterCart = cart.map(producto => (`Producto: "${producto.title}" - Cantidad: ${producto.cantidad}`))
            // filtrar datos del usuario y transformarlo en un string
            console.log(usuario)
            const filterUser = `Nombre: ${usuario[0]} - Telefono: ${usuario[1]} - Email: ${usuario[2]}`
            // filtrar datos de la fecha y el precio final del carrito
            const datosCompra = `La compra fue realizada el: ${salidaFecha} y el precio final es de: $${contador}`
            // unir todos los datos en un mismo array
            const juntandoDatosCompra = [...filterCart, datosCompra, filterUser]
            // desectructuro el array para que pueda ser enviado a firebase
            const ordenFinal = { ...juntandoDatosCompra }
            // guardamos los datos de la coleccion compras
            addDoc(collection(db, 'compras'), ordenFinal)
                .then((resolve) => {
                    console.log(ordenFinal)
                    messageID(resolve._key.path.segments[1])
                    clear()
                })
                .catch((error) => {
                    console.log(error)
                    enviarMensaje('Lo sentimos ha habido un error al momento de procesar tu compra', 'mostrar-grande', 5000)
                })
    }

    return (
        <CartContext.Provider value={{ cart, añadirProductoAlCarrito, clear, quitarProducto, sumaTotal, subTotal, enviarCompra, cargarDatosUsuario, messageID, idCompra, resetUserAndId }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider