import { createContext, useState } from "react";

export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([])

    function añadirProductoAlCarrito(cantidad, producto) {
        if (searchProductInCart(producto.id) === false) {
            setCart([...cart, { ...producto, cantidad }])
        } else {
            sumarCantidad(cantidad, producto)
        }
    }

    const searchProductInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    function clear() {
        setCart([])
    }

    function quitarProducto(id) {
        setCart(cart.filter( (producto) => producto.id !== id) )
    }

    function sumarCantidad(cantidad, producto) {
        cart.forEach((p) => {
            if (p.id === producto.id) {
                p.cantidad += cantidad
            }
        })
    }

    function subTotal(producto){
       return producto.price * producto.cantidad
    }

    function sumaTotal(){
        let contador = 0
        cart.forEach( (prod) => {
            contador = contador + prod.price * prod.cantidad
        } )
        return contador
    }

    return (
        <CartContext.Provider value={{ cart, añadirProductoAlCarrito, clear, quitarProducto, sumaTotal, subTotal }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider