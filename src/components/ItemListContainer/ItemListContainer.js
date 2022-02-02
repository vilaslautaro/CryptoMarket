import { useState, useEffect } from 'react';
import './itemListContainer.css';
import { getItem } from '../../api/api';
import ItemList from './ItemList/ItemList';

function ItemListContainer() {

    // creamos la variable productos vacia
    const [productos, setProducts] = useState([]);

    // traemos los productos 1 sola vez
    useEffect(() => {
        getItem().then(function (productos) {
            // guardamos en el estado que creamos "productos" los productos que traemos desde el api.js
            setProducts(productos)
        }).catch((error)=> {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <h2 className="title__Section">Tienda</h2>
            <div className="container__Store">
                {/* le decimos que si la api trae 1 o más productos, nos los muestre, de lo contrario que muestre un "cargando" */}
                { productos.length > 0 ? <ItemList productos={productos} /> : <p className='loading'>Cargando...</p> }
            </div>
        </div>
    );
}

export default ItemListContainer;