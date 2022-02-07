import './itemDetail.css';

// funcion que crea la caja visual del item individiualmente cuando es seleccionado
function ItemDetail({ producto }) {
    return (
        <div className='container__Box'>
            <img className="img__Product" src={producto.picture} alt='imagen producto' />
            <div className="box__Product">
                <div className="box__Description">
                    <p className="name__Product">{producto.title}</p>
                    <p className="descripcion__Product">{producto.description}</p>
                    <div className="box__Price">
                        <img className="img__Cripto" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png" title="Dai Criptomoneda"  alt="imagen logo dai" />
                        <p className="precio__Product">{producto.price}</p>
                    </div>
                </div>
                <button className="btn__Product">Comprar</button>
            </div>
        </div>
    )
}

export default ItemDetail;