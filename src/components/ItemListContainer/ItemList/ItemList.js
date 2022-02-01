import Item from './Item/Item'
import './itemList.css'

const ItemList = ({ products }) => {
    return (
        <div className="seccion__Tienda">
            <div className='box__Items'>
                {
                    products.map(function (product) {
                        return (
                            <Item key={product.id} item={product}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ItemList