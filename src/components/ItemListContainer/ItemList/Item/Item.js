import './item.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react'
import { SubNavContext } from '../../../../context/SubNavContext';

function Item({ item }) {
    const { setProductoId } = useContext(SubNavContext)

    function capturarId(){
        setProductoId(item.id)
    }

    return (
        <div className="contenedor__Producto">
            <Link to={`/producto/${item.id}`} onClick={capturarId} className="enlace__Producto">
            <img className="img__Producto" src={item.picture} alt='imagen item' />
            <div className="box__Producto">
                <p className="name__Producto">{item.title}</p>
                <div className="box__Precio">
                    <img className="img__Dai" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" title="Dai Criptomoneda" alt="imagen logo dai" />
                    <p className="precio__Producto">{item.price}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Item;