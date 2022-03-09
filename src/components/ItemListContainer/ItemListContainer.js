import { useState, useEffect } from 'react';
import './itemListContainer.css';
import getItem from '../../api/api';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import { configLoading, configSad, configError } from '../../lotties/lotties'
import { useContext } from 'react'
import { SubNavContext } from '../../context/SubNavContext'

function ItemListContainer() {
    const { searchValue } = useContext(SubNavContext)
    const [productos, setProducts] = useState([])
    const { categoryId, valueSearch} = useParams();
    const [error, setError] = useState('')
    const [validadorLoading, setValidadorLoading] = useState(false)

    
    useEffect(() => {
        setError('')
        getItem().then((productos) => {
            if (!categoryId) {
                if (searchValue !== "") {
                    let productosBuscados = productos.filter((producto) => {
                        let title = producto.title.toUpperCase()
                        return title.includes(searchValue);
                    })
                    setProducts(productosBuscados)
                    setValidadorLoading(true)
                    if (productosBuscados.length === 0) {
                        setError({
                            text: 'Lo sentimos, no encontramos ningun producto que coincida con tu busqueda.',
                            lottie: configSad
                        })
                    }
                }
                else {
                    setProducts(productos);
                    setValidadorLoading(true)
                }

            }
            else if (categoryId !== undefined) {
                let productosCategory = productos.filter((producto) => {
                    return producto.category === categoryId;
                })

                if (searchValue !== '') {
                    let productosBuscados = productosCategory.filter((producto) => {
                        let title = producto.title.toUpperCase()
                        return title.includes(searchValue);
                    })
                    setProducts(productosBuscados);
                    setValidadorLoading(true)
                    if (productosBuscados.length === 0) {
                        setError(
                            {
                                text: 'Lo sentimos, no encontramos ningun producto que coincida con tu busqueda en esta categoria.',
                                lottie: configSad
                            })
                    }
                }
                else {
                    setProducts(productosCategory);
                    setValidadorLoading(true)
                }
            }
        }).catch((error) => {
            console.log(error);
            setValidadorLoading(true)
            setError(
                {
                    text: 'Error, no ha sido posible cargar los productos.',
                    lottie: configError
                })
        });
    }, [categoryId, searchValue, valueSearch]);


    return (
        <div>
            <h2 className="title__Section">Tienda</h2>
            <div className="container__Store">
                {validadorLoading === true ? <ItemList productos={productos} /> : <Lottie {...configLoading} />}
                {error === '' ? null
                    :
                    <div className='container__errorSearch'>
                        <Lottie {...error.lottie} className='container__errorImg' />
                        <p>{error.text}</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ItemListContainer;