import Item from './Item/Item'
import './itemList.css'

const ItemList = ({ productos }) => {
    return (
        <div className="seccion__Tienda">
            <div className='box__Items'>
                {
                    productos.map((producto) => {
                        return (
                            <Item key={producto.id} item={producto}/>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default ItemList