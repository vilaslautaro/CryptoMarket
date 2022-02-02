import './item.css';
function Item({ item }) {
    return (
        <div className="contenedor__Producto">
            <img className="img__Producto" src={item.picture} alt='imagen item' />
            <div className="box__Producto">
                <p className="name__Producto">{item.title}</p>
                {/* <p className="descripcion__Producto">{item.description}</p> */}
                <div className="box__Precio">
                    <img className="img__Dai" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" title="Dai Criptomoneda" alt="imagen logo dai" />
                    <p className="precio__Producto">{item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;