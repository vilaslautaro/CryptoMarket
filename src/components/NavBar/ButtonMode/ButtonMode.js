import './buttonMode.css'

export default function ButtonMode() {
    return (
        <>
            <button id="btnMode" className='caja__BtnMode'>
                <span><img alt="sol" className='btn__img Sun' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257513/CryptoMarket/iconos/sun_dkwveg.png'></img></span>
                <span><img alt="luna" className='btn__img Moon' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257513/CryptoMarket/iconos/moon_t1sjur.png'></img></span>
            </button>
        </>
    )
}