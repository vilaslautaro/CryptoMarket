import './item.css';
import {Link} from 'react-router-dom';

// funcion que muestra el producto miniatura en la tienda con un Link para que redirija al item individual segun el ID
function Item({ item }) {
    return (
        <div className="contenedor__Producto">
            <Link to={`/producto/${item.id}`} className="enlace__Producto">
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