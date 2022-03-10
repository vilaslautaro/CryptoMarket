import { useState, useEffect } from 'react';
import getItem from '../../api/api';
import './itemDetailContainer.css';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import { configSad } from '../../lotties/lotties'
import ItemDetail from './ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const { productId } = useParams();
    const [error, setError] = useState('')

    useEffect(() => {
        getItem()
            .then(function (product) {
                const productoEncontrado = product.find((p) => p.id.toString() === productId);
                setProducto(productoEncontrado);
            })
            .catch(() => setError('Error, el producto no ha sido encontrado.'))
    }, [productId]);

    return (
        <div>
            <h2 className="title__SectionProduct">{producto.subcategory}</h2>
            <div className="container__Product">
                {<ItemDetail producto={producto} />}
                {error === "" ? null
                    :
                    <>
                        <Lottie {...configSad} />
                        <p className='text__error'>{error}</p>
                    </>
                }
            </div>
        </div>
    );
}

export default ItemDetailContainer;