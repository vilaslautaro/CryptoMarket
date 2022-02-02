import { useState, useEffect } from 'react';
import { getItem } from '../../api/api';
import './itemDetailContainer.css';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getItem().then(function (product) {
            product = product.find((p) => p.id === 1);
            setProduct(product);
        })
    }, []);

    return (
        <div>
            <h2 className="title__SectionProduct">{product.category}</h2>
            <div className="container__Product">
                {/* le decimos que si la api trae 1 o más productos, nos los muestre, de lo contrario que muestre un "cargando" */}
                <ItemDetail producto={product} />
            </div>
        </div>
    );
}

export default ItemDetailContainer;