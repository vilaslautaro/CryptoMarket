import './itemDetail.css';

function ItemDetail({ producto }) {
    return (
        <div className='container__Boxs'>
            <img className="img__Product" src={producto.picture} alt='imagen producto' />
            <div className="box__Product">
                <div className="box__Description">
                    <p className="name__Product">{producto.title}</p>
                    <p className="descripcion__Product">{producto.description}</p>
                    <div className="box__Precio">
                        <img className="img__Dai" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" title="Dai Criptomoneda"  alt="imagen logo dai" />
                        <p className="precio__Product">{producto.price}</p>
                    </div>
                </div>
                <button className="btn__Product">Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail;