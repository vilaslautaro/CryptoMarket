import Item from './Item/Item'
import './itemList.css'

// funcion que crea el contenedor de los productos en miniatura Y los recorre para mostrarlos luego con el componente ITEM (le pasa los valores de cada producto al componente ITEM)
const ItemList = ({ productos }) => {
    return (
        <div className="seccion__Tienda">
            <div className='box__Items'>
                {
                    // recorremos los productos con un .map
                    productos.map((producto) => {
                        return (
                            // le pasamos la key(valor unico de cada elemento(producto), y en la prop item le pasamos la informacion de los productos)
                            <Item key={producto.id} item={producto}/>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default ItemList