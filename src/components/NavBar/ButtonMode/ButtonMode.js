import './buttonMode.css'
import { useRef, useEffect } from 'react'

export default function ButtonMode() {
    const btnMode = useRef(null)
    
    useEffect(() => {
        if ((localStorage.getItem('modoOscuro') === 'activado') === true) {
            btnMode.current.classList.add('active');
            document.body.classList.add('dark');
        } else {
            btnMode.current.classList.remove('active');
            document.body.classList.remove('dark');
        }
    }, [])


    function modoOscuro(){
        if (btnMode.current.classList.contains('active') === false) {
            btnMode.current.classList.add('active');
            document.body.classList.add('dark');
            localStorage.setItem('modoOscuro', 'activado')
        }
        else{
            btnMode.current.classList.remove('active');
            document.body.classList.remove('dark');
            localStorage.setItem('modoOscuro', 'desactivado')
        }
    }


    return (
        <>
            <button ref={btnMode} onClick={modoOscuro} className='caja__BtnMode'>
                <span>
                    <img alt="sol" className='btn__img Sun' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257513/CryptoMarket/iconos/sun_dkwveg.png'>
                    </img>
                </span>
                <span>
                    <img alt="luna" className='btn__img Moon' src='https://res.cloudinary.com/dn7qsxzdf/image/upload/v1644257513/CryptoMarket/iconos/moon_t1sjur.png'>
                    </img>
                </span>
            </button>
        </>
    )
}