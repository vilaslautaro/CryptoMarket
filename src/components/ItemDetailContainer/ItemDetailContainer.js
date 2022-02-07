import { useState, useEffect } from 'react';
import { getItem } from '../../api/api';
import './itemDetailContainer.css';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';

// funcion que crea la pagina para mostrar el producto individualmente
function ItemDetailContainer() {
    // guardamos los productos en un estado
    const [product, setProduct] = useState([]);
    // guardamos el id de los productos en un estado
    const {productId} = useParams();

    // al ejecutar la app x1era vez y cuando hagamos un cambio de ID de algun producto, traemos los productos, y guardamos el ID de los productos en el estado product, para que al hacer click en el producto nos abra el que hemos seleccionado (reconociendolo por medio de su ID)
    useEffect(() => {
        getItem().then(function (product) {
            const productoEncontrado = product.find((p) => p.id.toString() === productId);
            setProduct(productoEncontrado);
        })
    }, [productId]);

    return (
        <div>
            <h2 className="title__SectionProduct">{product.subcategory}</h2>
            <div className="container__Product">
                {/* mostramos los productos trayendo el componente ItemDetail */}
                {<ItemDetail producto={product} />}
            </div>
        </div>
    );
}

export default ItemDetailContainer;