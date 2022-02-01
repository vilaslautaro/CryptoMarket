import { useState, useEffect } from 'react';
import './itemListContainer.css';
import { getItem } from '../../api/api';
import ItemList from './ItemList/ItemList';

function ItemListContainer() {

    // creamos la variable productos vacia
    const [products, setProducts] = useState([]);

    // traemos los productos 1 sola vez
    useEffect(() => {
        getItem().then(function (products) {
            // guardamos en la variable products los productos que traemos desde el api.js
            setProducts(products)
        });
    }, []);

    return (
        <div>
            <h2 className="title__Section">Tienda</h2>
            <div className="container__Store">
                {/* le decimos que si la api trae 1 o más productos, nos los muestre, de lo contrario que muestre un "cargando" */}
                { products.length > 0 ? <ItemList products={products} /> : <p className='loading'>Cargando...</p> }
            </div>
        </div>
    );
}

export default ItemListContainer;