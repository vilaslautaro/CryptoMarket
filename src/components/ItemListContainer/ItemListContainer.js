import { useState, useEffect } from 'react';
import './itemListContainer.css';
import { getItem } from '../../api/api';
import ItemList from './ItemList/ItemList';
import {useParams} from 'react-router-dom';
// import { collection, getDocs } from 'firebase/firestore';
// import {db} from '../firebase'

// funcion encargada de encapsular y traer los valores de los productos desde la API, y se las envia al componente ITEMLIST
// a su vez tambien se encarga de mostrar TODOS los productos, o segun cada caso (si estamos seleccionando por categoria o no)
// 
function ItemListContainer() {

    // creamos el estado productos
    const [productos, setProducts] = useState([]);
    // traemos las categorias con el hook UseParams
    const { categoryId } = useParams();
    // traemos TODOS los productos SINO estamos en una categoria, si estamos en una categoria, traemos los productos de ESA categoria
    useEffect(() => {
        // si categoryId no es utilizado
        if(!categoryId){
            getItem().then(function (productos) {
                // guardamos en el estado que creamos "productos" los productos que traemos desde el api.js
                setProducts(productos);
            }).catch((error)=> {
                console.log(error);
            });
        } else{
        getItem().then(function (productos) {
            const productosCategory = productos.filter((producto) =>{
                return producto.category === categoryId;
            })
            // guardamos en el estado que creamos "productos" los productos que traemos desde el api.js filtrados por categoria
            setProducts(productosCategory);
        }).catch((error)=> {
            console.log(error);
        });
        }
    }, [categoryId]);


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