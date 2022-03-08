import { useState, useEffect } from 'react';
import getItem from '../../api/api';
import './itemDetailContainer.css';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const {productId} = useParams();

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
                {<ItemDetail producto={product} />}
            </div>
        </div>
    );
}

export default ItemDetailContainer;